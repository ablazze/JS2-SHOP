import axios from 'axios';

export default {
    data: function() {
        return {
            "username": "",
            "password": "",
            "email": "",
            "gender": "",
            "credit_card": "",
            "bio": ""
        };
    },
    template: `
        <div class="registration">
            <form action="/register" method="POST" @submit.prevent="handleSubmit">
                <input type="text" name="username" value="" placeholder="username">
                    <span></span>
                <input type="password" name="password" value="" placeholder="password">
                    <span></span>
                <input type="email" name="email" value="" placeholder="email">
                    <span></span>
                <select name="gender">
                    <option value="m" selected>Мужчина</option>
                    <option value="f">Женщина</option>
                </select>
                    <span></span>
                <input type="text" name="credit_card" value="" placeholder="credit card">
                    <span></span>
                <input type="text" name="bio" value="" placeholder="bio">
                    <span></span>
                <input type="submit" value="Register">
            </form>
        </div>`,
    methods: {
        handleSubmit: function(evt) {
            console.log('submit!!!');
            const fd = new FormData(evt.target);
            const valid = this.validate(fd);
            console.log('valid = ', valid);
            if (!valid) {
                return;
            }
            console.log('ajax request');
            const data = {};
            for (var [key, value] of fd.entries()) {
                data[key] = value;
            }
            axios({
                method: 'post',
                url: evt.target.getAttribute("action"),
                data: data,
                config: { headers: {'Content-Type': 'multipart/form-data' }}
            }).then(response => {
                console.log('response = ', response);
                const data = response.data;
                if (data.result === 1) {
                    location.href = '/account';
                } else {
                    const errors = data.errors || [];
                    const errorText = errors.join(',\n');
                    alert(errorText);
                }
            });
        },
        validate(formData) {
            let valid = true;
            for (let elem of document.querySelectorAll(`.registration form input + span`)) {
                elem.textContent = "";
            }
            for (let elem of document.querySelectorAll(`.registration form input`)) {
                elem.classList.remove('error');
            }
            for (var [key, value] of formData.entries()) {
                console.log(key, value);
                if (key == 'username') {
                    if (value.match(/^[a-zA-Z]+$/gi) === null) {
                        document.querySelector(`.registration form input[name="${key}"]`).classList.add('error');
                        document.querySelector(`.registration form input[name="${key}"] + span`).textContent = "Неправильный формат имени!";
                        valid = false;
                    }
                } else if (key == 'password') {
                    if (!value) {
                        document.querySelector(`.registration form input[name="${key}"]`).classList.add('error');
                        document.querySelector(`.registration form input[name="${key}"] + span`).textContent = "Неправильный формат пароля!";
                        valid = false;
                    }
                } else if (key == 'email') {
                    if (value.match(/^[a-zA-Z]+(\.|\-)?[a-zA-Z]+@mail.ru$/gi) === null) {
                        document.querySelector(`.registration form input[name="${key}"]`).classList.add('error');
                        document.querySelector(`.registration form input[name="${key}"] + span`).textContent = "Неправильный формат email!";
                        valid = false;
                    }
                } else if (key == 'credit_card') {
                    if (value && value.match(/^[0-9]{7}-[0-9]{4}-[0-9]{6}-[0-9]{3}$/gi) === null){
                        document.querySelector(`.registration form input[name="${key}"]`).classList.add('error');
                        document.querySelector(`.registration form input[name="${key}"] + span`).textContent = "Неправильный формат кредитной карты!";
                        valid = false;
                    }
                }
            }
            return valid;
        }
    }

};