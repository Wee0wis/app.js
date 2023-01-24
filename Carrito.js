Vue.createApp({
    data(){
        return{
            carrito: [
                'Cebolla',
                'Tomate',
            ],
            producto:''

            }
        },
        methods:{
            agregarproducto(){
                this.carrito.push(this.producto)
                this.producto='';
            }
            
        }
    }).mount('#App')