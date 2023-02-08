Vue.createApp({
    data(){
        return{
                productos:[],
                nombre: '',
                precio: '',
                cantidad: '',
                descripcion:'',
                
                

            }
        },
        methods:{
            agregarproducto(){
                const producto = {
                    nombre: this.nombre,
                    precio: this.precio,
                    cantidad: this.cantidad
                }
                this.productos.push(producto);
               
            }
            
        }
    }).mount('#App')