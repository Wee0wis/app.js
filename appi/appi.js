Vue.createApp({
    data(){
        return{
            amiibos: [],
            
        
        }
    },
    methods: {
       async obtener(){

        
           const response = await fetch('https://amiiboapi.com/api/amiibo',{
                method: 'GET'
            });

            const data = await response.json();
            this.amiibos = data.amiibo;          
        }
    },
}).mount('#App')