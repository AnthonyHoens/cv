const header = document.querySelector('header');
const svgPath = document.querySelector('svg path');
const li = document.querySelectorAll('nav li a');
const divider = document.querySelector('.divider');

function scroll () {
	if(window.innerWidth < 990) {
		svgPath.style.fill = '#FFF';
		divider.style.borderRightColor = '#FFF';
		for(let i = 0; i < li.length; i++) {
			li[i].classList.add('white');
			li[i].classList.remove('black');
		}
		if(window.scrollY > 50) {
			if(header.classList[0] == 'header') {
				header.classList.remove('header');
			}
		}else if (window.scrollY == 0) {
			if(screenshotIsHere == true) {
				header.classList.add('header');
			}
		}
	}
	if(window.innerWidth > 990) {
		svgPath.style.fill = '#000000';
		divider.style.borderRightColor = '#000000';
		ul.className = 'closed';
		menu.className = 'menuclosed';
		div.classList = 'hidden';
		for(let i = 0; i < li.length; i++) {
			li[i].classList.add('black');
			li[i].classList.remove('white');
		}
		if(window.scrollY > 50) {
			if(header.classList[0] == 'header') {
				header.classList.remove('header');
			}
		}
		if(window.scrollY > 30) {
			header.classList.add('scrollNavBar');
			svgPath.style.fill = '#FFF';
			divider.style.borderRightColor = '#FFF';
			for(let i = 0; i < li.length; i++) {
				li[i].classList.add('white');
				li[i].classList.remove('black');
			}
		} else if (window.scrollY == 0) {
			if(screenshotIsHere == true) {
				header.classList.add('header');
			}
			console.log(screenshotIsHere)
			header.classList.remove('scrollNavBar');
			svgPath.style.fill = '#000000';
			divider.style.borderRightColor = '#000000';
			for(let i = 0; i < li.length; i++) {
				li[i].classList.add('black');
			li[i].classList.remove('white');
			}
		}
	}
	requestAnimationFrame(scroll);
}


requestAnimationFrame(scroll);

