import axios from 'axios';
import CartItemComponent from './cart-item';

const CartComponent = {
    data() {
        return {
            // cartUrl: `/getBasket.json`,
            cartItems: [],
            showCart: true,
            // imgCart: `https://placehold.it/50x100`
        }
    },
    methods: {
        addProduct(product){
            axios.post(`${this.$root.API}/addToCart`, product).then(response => {
                console.log('response = ', response);
                console.log('response.data', response.data);
                // const data = JSON.parse(response.data);
                const data = response.data;
                if (data.result == 1) {
                    this.cartItems = data.cart;
                }
                alert("Товар добавлен в корзину");
            });
        },
        removeProduct(productId){
            axios.post(`${this.$root.API}/removeFromCart`, {productId: productId}).then(response => {
                console.log('response = ', response);
                this.cartItems = this.cartItems.filter(item => item.id !== productId);
            });
        },
    },
    mounted(){
        axios.get(`${this.$root.API}/getCart`).then(response => {
            console.log('getCart = ', response);
            const items = response.data;
            for(let el of items){
                this.cartItems.push(el);
            }
        });
    },
    template: `<div>
            <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
            <div class="cart-block" v-show="showCart">
                        <p v-if="!cartItems.length">Корзина пуста</p>
                        <cart-item
                        v-for="item of cartItems"
                        :key="item.id"
                        :id="item.id"
                        :price="item.price"
                        :name="item.name"
                        :img="item.img"
                        :quantity="item.quantity"
                        @remove="removeProduct(item.id)"
                        ></cart-item>
                    </div>
            </div>`,
    components: {
        'cart-item': CartItemComponent
    }
}
export default CartComponent;