Vue.createApp({
    data(){
        return{
           rango: 0 ,
           
           
        }
        console.log(rango)
    },
    computed: {
        color(){
            if(this.rango > 0 && this.rango <= 40)
                return 'success'
                console.log(color)
            if(this.rango > 41 && this.rango <=80)
                return 'warning'
                console.log(color)
            if(this.rango > 81 && this.rango <=100)
                return 'danger'
                console.log(color)
        }
    }
}).mount('#App')