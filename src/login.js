import axios from 'axios';

export default {
    data: function () {
        return {
            username: "",
            password: ""
        };
    },
    template: `<div>
    <h4 class="checkout__list_drop_content_h4">Already registed?</h4>
    <p class="checkout__list_drop_content_paragraph checkout__list_drop_content_paragraph_bottom27">
    Please log in below</p>
    <label class="checkout__list_drop_content_label_2">USERNAME<span
    class="checkout__list_drop_content_paragraph_red">*</span> <br>
    <input type="text" v-model="username"><br>
    </label>
    <label class="checkout__list_drop_content_label_2">PASSWORD <span
    class="checkout__list_drop_content_paragraph_red">*</span><br>
    <input type="password" v-model="password">
    </label>
    <p class="checkout__list_drop_content_paragraph checkout__list_drop_content_paragraph_red">*
    Required Fileds</p>
    <div class="flex">
    <div class="checkout__list_drop_button checkout__list_drop_button2 bxbb" @click="login">Log in</div>
    <a class="checkout__list_drop_content_forgot" href="#">Forgot Password ?</a>
    </div>
    </div>
    `,
    methods: {
        login: function() {
            const { username, password } = this;
            axios.post('/login', {username, password}).then(response => {
                console.log('response = ', response);
                const data = response.data;
                if (data.result) {
                    location.href = '/account';
                } else {
                    alert(data.errors.join('\n'));
                }
            });
        }
    }
}
