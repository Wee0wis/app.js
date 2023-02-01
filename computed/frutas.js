Vue.createApp({
    data(){
        return{
           selector:""
        }
    },
    computed:{
        selectfrutas(){
            if(this.selector == "Manzana"){
                return '../elementos/manzana.jpg';
        
            }
            if(this.selector == "pera"){
                return '../elementos/pera.jfif';
        
            }
            if(this.selector == "platano"){
                return '../elementos/platano.jfif';
        
            }
            if(this.selector == "durazno"){
                return '../elementos/Durazno.webp';
        
            }
            if(this.selector == "coco"){
                return '../elementos/coco.jfif';
        
            }
            
        }
    }
}).mount('#App')