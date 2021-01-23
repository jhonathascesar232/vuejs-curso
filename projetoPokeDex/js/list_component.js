Vue.component('my-list',{
    template: `
        <li 
            class="poke-list-item">
            <img 
                :src="sprite"
                alt=""
            >
            <span>
                {{ pokemon.number | pokeNumber }} {{ pokemon.name }}
            </span>
            
        </li>
    `,
    props: ['pokemon'],
    computed: {
        number: function(){
            //  acessa o filtro 'pokeNumber' passa 'this.pokemon.number'
            //  como parametro e retorna o número formatado
            return Vue.filter('pokeNumber')(this.pokemon.number);
        },
        sprite: function(){
            return `https://serebii.net/pokedex-xy/icon/${this.number}.png`;
        },
    }
})
// props são variaveis que recebem para o componente