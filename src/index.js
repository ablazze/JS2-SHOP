import CartComponent from './cart.js';
import CartItemComponent from "./cart-item.js";
import ProductsComponent from "./products.js";
import ProductItemComponent from "./product-item.js";
import ErrorComponent from "./error.js";
import SearchComponent from "./search.js";
import RegistrationComponent from './registration.js';
import AccountComponent from './account.js';
import LoginComponent from './login.js';
import ReviewComponent from './review.js';




const app = new Vue({
    el: '#root',
    data: {
        isError: false,
        API: `http://localhost:3000`
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => this.isError = true);
        },
    },
    components: {
        'products': ProductsComponent,
        'cart': CartComponent,
        'registration': RegistrationComponent,
        'account': AccountComponent,
        'login': LoginComponent,
        'review': ReviewComponent,

    },
    mounted() {
        console.log('root refs = ', this.$refs);
    }
});
