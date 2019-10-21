import axios from 'axios';

export default {
    props: ["admin"],
    data: function() {
        return {
            reviews: [],
            reviewText: ""
        }
    },
    template: `
    <div class="container">
        <div v-for="item in reviews">
            {{item.text}}<button @click="removeReview(item.id)" v-if="admin">X</button>
            <button @click="approveReview(item.id)" v-if="admin && !item.approved">Approve</button>
        </div>
        <textarea placeholder="Ваш отзыв" v-model="reviewText" v-if="!admin"></textarea>
        <button @click="sendReview" v-if="!admin">Отправить</button>
    </div>
    `,
    methods: {
        sendReview: function(evt) {
            console.log('send', this.reviewText);
            axios.post("/addReview", {text: this.reviewText}).then(response => {
                const data = response.data;
                if (data.result === 1) {
                    alert("Ваш отзыв отправлен на модерацию");
                } else {
                    alert(data.errors.join("\n"));
                }
            })
        },
        removeReview: function(id) {
            console.log('id = ', id);
            axios.post('/removeReview', {id: id}).then(response => {
                const data = response.data;
                if (data.result === 1) {
                    this.reviews = data.reviews;
                } else {
                    alert(data.errors.join("\n"));
                }
            });
        },
        approveReview: function(id) {
            axios.post('/approveReview', {id: id}).then(response => {
                const data = response.data;
                if (data.result === 1) {
                    this.reviews = data.reviews;
                    alert('Подтвержден!');
                } else {
                    alert(data.errors.join("\n"));
                }
            });
        }
    },
    created: function() {
        axios.get("/reviews").then(response => {
            const data = response.data;
            if (data.result === 1) {
                console.log('reviews type = ', typeof data.reviews);
                this.reviews = data.reviews;
            }
        })
    }
}
