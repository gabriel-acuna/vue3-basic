const app = Vue.createApp({
    data: function() {
        return {
            product:{
                name: 'Socks',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
                image: './assets/images/socks_blue.jpg',
                inStock: true,
                url: 'https://github.com/gabriel-acuna/vue3-basic'
            }
        }
    }
})
