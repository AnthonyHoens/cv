const header = document.querySelector('header');
const svgPath = document.querySelector('svg path');
const li = document.querySelectorAll('nav li a');
const divider = document.querySelector('.divider');
console.log(divider.style)

function scroll () {
	if(window.innerWidth < 990) {
		svgPath.style.fill = '#FFF';
		divider.style.borderRightColor = '#FFF';
		for(let i = 0; i < li.length; i++) {
			li[i].style.color = '#FFF';
		}
	}
	if(window.innerWidth > 990) {
		svgPath.style.fill = '#000000';
		divider.style.borderRightColor = '#000000';
		for(let i = 0; i < li.length; i++) {
			li[i].style.color = '#000000';
		}
		if(window.scrollY > 30) {
			header.classList.add('scrollNavBar');
			svgPath.style.fill = '#FFF';
			divider.style.borderRightColor = '#FFF';
			for(let i = 0; i < li.length; i++) {
				li[i].style.color = '#FFF';
			}
		} else if (window.scrollY == 0) {
			header.classList.remove('scrollNavBar');
			svgPath.style.fill = '#000000';
			divider.style.borderRightColor = '#000000';
			for(let i = 0; i < li.length; i++) {
				li[i].style.color = '#000000';
			}
		}
	}
	requestAnimationFrame(scroll);
}


requestAnimationFrame(scroll);

