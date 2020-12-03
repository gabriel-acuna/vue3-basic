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
                image: './assets/images/socks_blue.jpg',
                inventory: 9,
                variants: [
                    { id: 2234, color: 'green' },
                    { id: 235, color: 'blue'}
                ]
            
            }
        }
    }
})