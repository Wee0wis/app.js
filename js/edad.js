Vue.createApp({
    data(){
        return{
        }
    },
    methods: {
       calcularedad(){

            var edad=prompt("ingresa tu edad");

         if(edad >= 18 ){
            this.edad = mayor;
         }
         if (edad < 18)
         {
            this.edad = menor;
         }
         if (edad <0){
            console.log("esta mal esta edad")
         }
         if(edad > 100){
            console.log("tas muy viejo")
         }
         
       
           
        } 
    }    
    
}).mount('#app')