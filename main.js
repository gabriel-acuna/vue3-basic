const app = Vue.createApp({
    data: function () {
        return {
            product: {
                name: 'Socks',
                details: [
                    { material: 'cotton', percent: '50' },
                    { material: 'wool', percent: '30' },
                    { material: 'polyester', percent: '20' }

                ],
                inventory: 9,
                variants: [
                    { id: 2234, color: 'green', image: './assets/images/socks_blue.jpg' },
                    { id: 235, color: 'blue', image: './assets/images/socks_green.jpg',}
                ]
            
            },
            cart:0
        }
    },
    methods: {
        addItem() {
            this.cart++;
        }
    },
})