
const app = new Vue({
	el: '#app',
	data: {
		pokemonList: [
			
		],
		//	vazio para inicio da renderização
		nameFilter: '',
	},
	mounted: function(){
		PokeService.API.Pokemon.listAll().then(pokemonList => {
			this.pokemonList = pokemonList;
		})
	},
	computed: {
		//	função para retorna todos que contem o 'nameFilter'
		//	exemplo: pesquisa
		pokeList: function(){
			//	passa para caixa baixa o conteúdo
			var nameFilter = this.nameFilter.toLowerCase();
			//	filtra um(ns) pokemon(ns)
			return this.pokemonList.filter(
				//	ver se inclui o nameFilter no pokemon.name
				pokemon => pokemon.name.includes(nameFilter)
			) 
		}
	},
	
})