Vue.createApp({
    data(){
        return{
           pokedex: null
            
        
        }
    },
    methods: {
      async getPokemon(){
        const valor = Math.floor(Math.random() * 100)
       const response =  await fetch('https://pokeapi.co/api/v2/pokemon/'+valor,{
                method: 'GET'
            });
            const data = await response.json();
            this.pokedex = data;
           
        }

    },
}).mount('#App')