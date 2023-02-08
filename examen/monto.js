Vue.createApp({
    data(){
        return{
                cursos:[],
                nombre: '',
                descripcion: '',
                precio: '',
                cantidad: '',
                urlinter:'',
                acumulacion:0,
                total:0

            }
        },
        methods:{
            agregarcurso(){
                const curso = {
                    nombre: this.nombre,
                    descripcion: this.descripcion,
                    precio: this.precio,
                    cantidad: this.cantidad,
                    urlinter: this.urlinter
                }
                this.cursos.push(curso);
               this.acumulacion = this.precio * this.cantidad
               this.total = this.acumulacion 

            },
            /* cuenta(){
              this.acumulacion = precio * cantidad
            } */
            
        }
    }).mount('#App')