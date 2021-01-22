// 2 -> '002'
// 15 -> '015'
// 300 -> '300'
Vue.filter('pokeNumber', function(number){
	return ('000'+ number).slice(-3)
});
