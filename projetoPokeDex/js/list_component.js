Vue.component('my-list',{
    template: `
        <li 
            class="poke-list-item">
            <img 
                :src="'https://serebii.net/pokedex-xy/icon/'+pokemon.number+'.png'"
                alt=""
            >
            <span>
                {{ pokemon.number | pokeNumber }} {{ pokemon.name }}
            </span>
            
        </li>
    `,
    props: ['pokemon'],
})
// props são variaveis que recebem para o componente