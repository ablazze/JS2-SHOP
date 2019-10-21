import axios from 'axios';

export default {
    data: function() {
        return {
            username: "",
            "password": "",
            "email": "",
            "gender": "",
            "credit_card": "",
            "bio": ""
        };
    },
    template: `
        <div>
            <div>{{ username }}</div>
            <div>{{ email }}</div>
            <div class="account">
                <form action="/update" method="POST" @submit.prevent="handleSubmit">
                    <input type="text" name="username" v-model="username" placeholder="username">
                        <span></span>
                    <input type="password" name="password" v-model="password"  placeholder="password">
                        <span></span>
                    <input type="email" name="email" v-model="email"  placeholder="email">
                        <span></span>
                    <select name="gender" v-model="gender">
                        <option value="m" selected>Мужчина</option>
                        <option value="f">Женщина</option>
                    </select>
                        <span></span>
                    <input type="text" name="credit_card" v-model="credit_card"  placeholder="credit card">
                        <span></span>
                    <input type="text" name="bio" v-model="bio"  placeholder="bio">
                        <span></span>
                    <input type="submit" value="Save">
                </form>
            </div>
            <button @click="logout">Выйти</button>
        </div>
        `,
    created: function() {
        axios.get('/user').then(response => {
            console.log('response = ', response);
            const data = response.data;
            this.username = data.username;
            this.password = data.password;
            this.email = data.email;
            this.gender = data.gender;
            this.credit_card = data.credit_card;
            this.bio = data.bio;
        })
    },
    methods: {
        logout: function() {
            axios.post('/logout', {}).then(function(response) {
                console.log('response = ', response);
                const data = response.data;
                if (data.result === 1) {
                    location.href = '/';
                }
            });
        },
        handleSubmit: function () {
            const data = {};
            data['username'] = this.username;
            data['password'] = this.password;
            data['email'] = this.email;
            data['gender'] = this.gender;
            data['credit_card'] = this.credit_card;
            data['bio'] = this.bio;
            console.log('data = ', data);
            const valid = this.validate(data);
            if (!valid) {
                console.log('Форма не валидна');
                return;
            }
            axios.post('/update', data).then(response => {
                console.log('response = ', response);
                const data = response.data;
                if (data.result === 1) {
                    alert('Изменения успешно сохранены');
                } else {
                    alert('Server error');
                }
            });
        },
        validate(data) {
            let valid = true;
            for (let elem of document.querySelectorAll(`.account form input + span`)) {
                elem.textContent = "";
            }
            for (let elem of document.querySelectorAll(`.account form input`)) {
                elem.classList.remove('error');
            }
            for (let key in data) {
                const value = data[key];
                if (key == 'username') {
                    if (value.match(/^[a-zA-Z]+$/gi) === null) {
                        document.querySelector(`.account form input[name="${key}"]`).classList.add('error');
                        document.querySelector(`.account form input[name="${key}"] + span`).textContent = "Неправильный формат имени!";
                        valid = false;
                    }
                } else if (key == 'password') {
                    if (!value) {
                        document.querySelector(`.account form input[name="${key}"]`).classList.add('error');
                        document.querySelector(`.account form input[name="${key}"] + span`).textContent = "Неправильный формат пароля!";
                        valid = false;
                    }
                } else if (key == 'email') {
                    if (value.match(/^[a-zA-Z]+(\.|\-)?[a-zA-Z]+@mail.ru$/gi) === null) {
                        document.querySelector(`.account form input[name="${key}"]`).classList.add('error');
                        document.querySelector(`.account form input[name="${key}"] + span`).textContent = "Неправильный формат email!";
                        valid = false;
                    }
                } else if (key == 'credit_card') {
                    if (value && value.match(/^[0-9]{7}-[0-9]{4}-[0-9]{6}-[0-9]{3}$/gi) === null){
                        document.querySelector(`.account form input[name="${key}"]`).classList.add('error');
                        document.querySelector(`.account form input[name="${key}"] + span`).textContent = "Неправильный формат кредитной карты!";
                        valid = false;
                    }
                }
            }
            return valid;
        }
    }
};