const solo    = document.querySelector('#solo');
const family  = document.querySelector('#family');
const student = document.querySelector('#student');

const soloDiv    = document.querySelector('#soloDiv');
const familyDiv  = document.querySelector('#familyDiv');
const studentDiv = document.querySelector('#studentDiv');

const soloButton    = document.querySelector('#solo svg');
const familyButton  = document.querySelector('#family svg');
const studentButton = document.querySelector('#student svg');
 
window.addEventListener('load', () => {
	if(window.innerWidth <= 770) {
		solo.addEventListener('click', () => {
			soloDiv.classList.toggle('hidden');
			soloButton.classList.toggle('svgrotate');
	
			if(familyDiv.classList == '' || studentDiv.classList == '') {
				familyDiv.classList.add('hidden');
				familyButton.classList.remove('svgrotate');
	
				studentDiv.classList.add('hidden');
				studentButton.classList.remove('svgrotate');
			}
	
		},false);
	
		family.addEventListener('click', () => {
			familyDiv.classList.toggle('hidden');
			familyButton.classList.toggle('svgrotate');
	
			if(soloDiv.classList == '' || studentDiv.classList == '') {
				soloDiv.classList.add('hidden');
				soloButton.classList.remove('svgrotate');
	
				studentDiv.classList.add('hidden');
				studentButton.classList.remove('svgrotate');
			}
	
		}, false);
	
		student.addEventListener('click', () => {
			studentDiv.classList.toggle('hidden');
			studentButton.classList.toggle('svgrotate');
	
			if(familyDiv.classList == '' || soloDiv.classList == '') {
				familyDiv.classList.add('hidden');
				familyButton.classList.remove('svgrotate');
	
				soloDiv.classList.add('hidden');
				soloButton.classList.remove('svgrotate');
			}
	
		}, false);
	};
}, false);

window.addEventListener('resize', () => {
	if(window.innerWidth <= 770) {
		solo.addEventListener('click', () => {
			soloDiv.classList.toggle('hidden');
			soloButton.classList.toggle('svgrotate');
	
			if(familyDiv.classList == '' || studentDiv.classList == '') {
				familyDiv.classList.add('hidden');
				familyButton.classList.remove('svgrotate');
	
				studentDiv.classList.add('hidden');
				studentButton.classList.remove('svgrotate');
			}
	
		},false);
	
		family.addEventListener('click', () => {
			familyDiv.classList.toggle('hidden');
			familyButton.classList.toggle('svgrotate');
	
			if(soloDiv.classList == '' || studentDiv.classList == '') {
				soloDiv.classList.add('hidden');
				soloButton.classList.remove('svgrotate');
	
				studentDiv.classList.add('hidden');
				studentButton.classList.remove('svgrotate');
			}
	
		}, false);
	
		student.addEventListener('click', () => {
			studentDiv.classList.toggle('hidden');
			studentButton.classList.toggle('svgrotate');
	
			if(familyDiv.classList == '' || soloDiv.classList == '') {
				familyDiv.classList.add('hidden');
				familyButton.classList.remove('svgrotate');
	
				soloDiv.classList.add('hidden');
				soloButton.classList.remove('svgrotate');
			}
	
		}, false);
	};
}, false);


