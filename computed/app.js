Vue.createApp({
    data(){
        return{
           edad: 0
        }
    },
    computed:{
        calculoedad(){
            if(this.edad > 18){
                return 'eres mayor edad';
            } else {
                return 'eres menor de edad';
            }
        }
    }
}).mount('#App')