Vue.directive('rotate-on-scroll', function(el, binfind){
	// escuta eventos de scroll(rolagem de tela)
	window.addEventListener('scroll', function(){
		console.log(window.scrollY);
		var ratation = `translateY(-50%) rotateZ(${window.scrollY / 5}deg)`;
		el.style.transform = ratation;
	})
})