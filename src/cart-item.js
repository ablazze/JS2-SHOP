const CartItemComponent = {
    props: ['id', 'name', 'price', 'quantity', 'img'],
    // template: "<div>Hello</div>"
    template: `<div class="cart-item" >
                    <div class="product-bio">
                        <img :src="imgSource" alt="Some image">
                        <div class="product-desc">
                            <p class="product-title">{{name}}</p>
                            <p class="product-quantity">Quantity: {{quantity}}</p>
                            <p class="product-single-price">$ {{price}} each</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">$ {{price*quantity}} full price</p>
                        <button class="del-btn" @click="$emit('remove')">&times;</button>
                    </div>
                </div>`,
    computed: {
        imgSource: function() {
            return "/img/" + this.img;
        }
    }
}

export default CartItemComponent;