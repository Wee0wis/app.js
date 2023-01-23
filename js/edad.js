Vue.createApp({
    data(){
        return{
         edad:'',
         resultado:''
        }
    },
    methods: {
       calcularedad(){
/* 
            var edad=prompt("ingresa tu edad"); */

         if(this.edad >= 18){
            this.resultado='mayor';
         }
         else /* if (edad < 18) */
         {
            this.resultado='menor';
         }
        /*  if (edad <0){
            console.log("esta mal esta edad")
         }
         if(edad > 100){
            console.log("tas muy viejo") */
         }
          
       
           
      } 
      
    
}).mount('#app')