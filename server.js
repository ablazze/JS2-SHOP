const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fs = require('fs');

const ADMIN_SECRET = "ffyfj768765765gfh";
const ADMIN_PASSWORD = "1234";
const PAGE_SIZE = 8;

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('.'));

app.use('*', function (req, res, next) {
    // console.log('Cookies: ', req.cookies, res.cookies['uid']);
    console.log('Cookies: ', req.cookies);
    fs.readFile("users.json", (err, data) => {
        if (err) {
            throw err;
        }
        const uid = +req.cookies['uid'];
        const users = JSON.parse(data);
        const user = users.filter(u => u.id === uid)[0];
        if (user) {
            req.user = user;
        }
        console.log('найденный юзер = ', user);
        next();
    });
});

app.get('/', (req, res) => {
    fs.readFile('index.html', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/admin/login', (req, res) => {
    fs.readFile('admin_login.html', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post('/admin/login', (req, res) => {
    const password = req.body.password;
    console.log('password = ', password);
    console.log('req.body = ', req.body);
    if (password !== ADMIN_PASSWORD) {
        // res.status(403);
        return res.send({"result": 0, "errors": ["Доступ закрыт"]});
    }
    res.cookie("admin_secret", ADMIN_SECRET, {maxAge: 1000 * 60 * 60, httpOnly: false});
    res.send({"result": 1});
});

app.get('/admin', (req, res) => {
    const admin_secret = req.cookies["admin_secret"];
    if (admin_secret !== ADMIN_SECRET) {
        res.status(403);
        res.send("Доступ закрыт");
        return;
    }
    fs.readFile('admin.html', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/account', (req, res) => {
    if (!req.user) {
        return res.redirect('/');
    }
    fs.readFile('account.html', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/reviews', (req, res) => {
    fs.readFile('reviews.json', 'utf8', (err, text) => {
        let reviews = JSON.parse(text);
        const admin_secret = req.cookies["admin_secret"];
        if (admin_secret !== ADMIN_SECRET) {
            reviews = reviews.filter(item => item.approved);
        }
        res.send({"result": 1, "reviews": reviews})
    });
});

app.post("/addReview", (req, res) => {
    fs.readFile('reviews.json', 'utf8', (err, text) => {
        if (err) {
            throw err;
        }
        const reviewText = req.body.text;
        const reviews = JSON.parse(text);
        const id = Math.floor(Math.random() * 10 ** 16);
        reviews.push({
            "id": id,
            "approved": false,
            "text": reviewText
        });
        fs.writeFile('reviews.json', JSON.stringify(reviews), (err) => {
            if (err) {
                throw err;
            }
            res.send({"result": 1});
        });
    });
});

app.post("/removeReview", (req, res) => {
    const admin_secret = req.cookies["admin_secret"];
    if (admin_secret !== ADMIN_SECRET) {
        return res.send({"result": 0, "errors": ["Только админ имеет право удалять отзывы"]});
    }
    fs.readFile('reviews.json', 'utf8', (err, text) => {
        if (err) {
            throw err;
        }
        const reviewId = +req.body.id;
        let reviews = JSON.parse(text);
        reviews = reviews.filter(item => item.id !== reviewId);
        fs.writeFile('reviews.json', JSON.stringify(reviews), (err) => {
            if (err) {
                throw err;
            }
            res.send({"result": 1, "reviews": reviews});
        });
    });
});

app.post("/approveReview", (req, res) => {
    const admin_secret = req.cookies["admin_secret"];
    if (admin_secret !== ADMIN_SECRET) {
        return res.send({"result": 0, "errors": ["Только админ имеет право подтверждать отзывы"]});
    }
    fs.readFile('reviews.json', 'utf8', (err, text) => {
        if (err) {
            throw err;
        }
        const reviewId = +req.body.id;
        let reviews = JSON.parse(text);
        const index = reviews.map(item => item.id).indexOf(reviewId);
        if (index > -1) {
            reviews[index].approved = true;
        } else {
            return res.send({"result": 0, "errors": ["Отзыв не найден"]});
        }
        fs.writeFile('reviews.json', JSON.stringify(reviews), (err) => {
            if (err) {
                throw err;
            }
            res.send({"result": 1, "reviews": reviews});
        });
    });
});


app.post('/logout', (req, res) => {
    res.clearCookie("uid");
    res.send({"result": 1});
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    fs.readFile('users.json', 'utf8', (err, text) => {
        const users = JSON.parse(text);
        const user = users.filter(user => user.username === username && user.password === password)[0];
        if (user) {
            res.cookie("uid", user.id, {maxAge: 1000 * 60 * 60, httpOnly: false});
            res.send({"result": 1});
        } else {
            res.send({"result": 0, "errors": ["Пользователь не найден!"]})
        }
    });
});

app.post('/update', (req, res) => {
    const reqUser = req.body;
    const password = req.body;
    fs.readFile('users.json', 'utf8', (err, text) => {
        const users = JSON.parse(text);
        const index = users.map(user => user.id).indexOf(req.user.id);
        if (index > -1) {
            req.user = {...req.user, ...reqUser};
            users[index] = req.user;
            fs.writeFile('users.json', JSON.stringify(users), (err) => {
                if (err) {
                    res.send({"result": 0, "errors": ["server Error"]});

                } else {
                    res.send({"result": 1});
                }
            });
        } else {
            res.send({"result": 0, "errors": ["Ошибка получения пользователя"]});
        }
    });
});

app.get('/user', (req, res) => {
    const user = req.user || {};
    res.send(user);
});

app.get('/catalogData', (req, res) => {
    fs.readFile('catalog.json', 'utf8', (err, data) => {
        const page = +req.query.page || 1;
        console.log('page = ', page);
        data = JSON.parse(data);
        data = data.slice((page-1)*PAGE_SIZE, page*PAGE_SIZE);
        data = JSON.stringify(data);
        res.send(data);
    });
});

app.get('/getCart', (req, res) => {
    fs.readFile('cart.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/checkout', (req, res) => {
    fs.readFile('checkout.html', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/product', (req, res) => {
    fs.readFile('product.html', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post('/register', (req, res) => {
    const data = req.body;
    console.log('data = ', data);
    fs.readFile('users.json', 'utf8', (err, text) => {
        const users = JSON.parse(text);
        const username = data.username;
        console.log('username = ', username);
        const u = users.filter(user => user.username === username)[0];
        console.log('u = ', u);
        if (u !== undefined) {
            res.send(`{"result": 0, "errors": ["Такое username уже есть"]}`);
            return;
        }
        data.id = Math.floor(Math.random() * 10 ** 16);
        users.push(data);
        fs.writeFile('users.json', JSON.stringify(users), (err) => {
            if (err) {
                res.send('{"result": 0}');
            } else {
                res.cookie("uid", data.id, {maxAge: 1000 * 60 * 60, httpOnly: false});
                res.send(`{"result": 1}`);
            }
        });
    })
});

app.post('/addToCart', (req, res) => {
    fs.readFile('cart.json', 'utf8', (err, data) => {
        if (err) {
            res.send('{"result": 0}');
        } else {
            const cart = JSON.parse(data);
            const item = req.body;

            const index = cart.map(item => item.id).indexOf(item.id);
            if (index !== -1) {
                cart[index].quantity += item.quantity;
            } else {
                cart.push(item);
            }

            fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } else {
                    res.send(`{"result": 1, "cart": ${JSON.stringify(cart)}}`);
                }
            });
        }
    });
});

app.post('/removeFromCart', (req, res) => {
    fs.readFile('cart.json', 'utf8', (err, data) => {
        if (err) {
            res.send('{"result": 0}');
        } else {
            let cart = JSON.parse(data);
            const productId = req.body.productId;

            cart = cart.filter(item => item.id !== productId);

            fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } else {
                    res.send('{"result": 1}');
                }
            });
        }
    });
});

app.listen(3000, function () {
    console.log('server is running on port 3000!');
});


