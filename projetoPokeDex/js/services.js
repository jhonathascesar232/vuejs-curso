var PokeService = {
    API: {
        // url: '//pokeapi.co/api/v1/',
        url: "https://dev.treinaweb.com.br/pokeapi/",
        //  funcao que recebe uma url
        get: (url)=>{
            return fetch(`${PokeService.API.url}${url}`)
                .then(response => response.json());
        },
        Pokemon: {
            listAll: ()=>{
                return PokeService.API.get("pokedex/1")
                    .then(response=>{
                        return response.pokemon
                            // retorna os numero de id dos pokemons
                            .map(pokemon=>{
                                pokemon.number = PokeService.getNumberFromURL(pokemon.resource_uri);
                                return pokemon;
                            })
                            // filtra os numero dos pokemons
                            .filter(pokemon => pokemon.number < 1000 )
                            .sort((a, b) => {
                                // retoran 1 se a.number é maior que b.number
                                return (a.number > b.number ? 1 : -1);
                            })
                    })
            }
        }
    },
    getNumberFromURL: (url) => {
        // extrai os numeros da url
        console.log(`URL ${url}`);
        return parseInt(url.replace(/.*\/(\d+)\/$/,'$1'));
    }
}