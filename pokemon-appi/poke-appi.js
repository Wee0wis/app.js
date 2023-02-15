Vue.createApp({
    data() {
        return {
            pokedex: [],
            
        }
    },
    methods: {
            async getPokemon() {
                for (let i = 1; i <= 151; i++) {

                    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i, {
                        method: 'GET'
                    });
                    const data = await response.json();
                    this.pokedex.push(data);
                }

                
             
            }


        },




    }
).mount('#App')