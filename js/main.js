const header = document.querySelector('header');

function scroll () {
	if(window.innerWidth > 990) {
		if(window.scrollY > 30) {
			header.classList.add('scrollNavBar');
		} else if (window.scrollY == 0) {
			header.classList.remove('scrollNavBar');
		}
	}
	requestAnimationFrame(scroll);
}


requestAnimationFrame(scroll);

