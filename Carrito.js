Vue.createApp({
    data(){
        return{
                producto:[],
                nombre: '',
                precio: '',
                cantidad: ''    
                

            }
        },
        methods:{
            agregarproducto(){
                const producto = {
                    producto: this.nombre,
                    producto: this.precio,
                    producto: this.cantidad
                }
                this.producto.push(producto)
               producto=''; 
            }
            
        }
    }).mount('#App')