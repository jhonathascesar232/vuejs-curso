
const app = new Vue({
	el: '#app',
	data: {
		pokemonList: [
			{'name': 'charizard', 'number':6},
			{'name': 'squirtle', 'number':7},
			{'name': 'pikachu', 'number':25},
			{'name': 'celebi', 'number':251},
			{'name': 'lucario', 'number':448},
		],
		//	vazio para inicio da renderização
		nameFilter: '',
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