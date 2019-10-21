import ProductItemComponent from "./product-item";

const ProductsComponent = {
    data(){
        return {
            catalogUrl: `/catalogData?page=1`,
            data: [],
            filteredData: [],
        }
    },
    methods: {
        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        },
        makeGETRequest(url, callback) {
            let xhr;

            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    callback(xhr.responseText);
                }
            }

            xhr.open('GET', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

            xhr.send();
        },
        makePOSTRequest(url, data, callback) {
            let xhr;

            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    callback(xhr.responseText);
                }
            }

            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

            xhr.send(data);
        }
    },
    mounted(){
        this.makeGETRequest(this.catalogUrl, (goods) => {
            this.data = JSON.parse(goods);
            this.filteredData = JSON.parse(goods);
            console.log('goods=', goods);
        });
    },
    components: {
        'product-item': ProductItemComponent
    },
    template:
        `<div class="products">
            <product-item
            v-for="product of filteredData"
            :key="product.id"
            :id="product.id"
            :name="product.product_name"
            :price="product.price"
            :img="product.img">
            </product-item>
        </div>`
}

export default ProductsComponent;