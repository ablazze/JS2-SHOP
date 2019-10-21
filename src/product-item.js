const ProductItemComponent = {
    props: ['id', 'img', 'name', 'price'],
    template:
        `<div class="product-item" >
            <div class="desc" @click="buy">
                <img width="100" height="140" :src="imgSource" alt="">
                <div>{{this.name}}</div>
                <div>{{this.price}}</div>
                <!--<button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>-->
            </div>
        </div>`,
    methods: {
        buy: function() {
            const data = {
                id: this.id,
                name: this.name,
                price: this.price,
                img: this.img,
                quantity: 1
            };
            this.$root.$refs.cart.addProduct(data);
        }
    },
    computed: {
        imgSource: function() {
            return "/img/" + this.img;
        }
    }
}

export default ProductItemComponent;