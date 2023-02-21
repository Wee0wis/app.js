Vue.createApp({
    data() {
        return {
            pokedex: [],
            loading: null,
            limite: 0
        }
    },
    mounted() {
        this.getPokemon();
    },
    methods: {
            async getPokemon() {
                
                this.loading = true;
                
                for (let i = 1; i <= this.limite; i++) {

                    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i, {
                        method: 'GET'
                    });
                    const data = await response.json();
                    this.pokedex.push(data);
                }
                this.loading = false;
                
             
            }


        },




    }
).mount('#App')