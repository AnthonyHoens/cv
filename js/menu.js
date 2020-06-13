const menu = document.querySelector('button');
const ul = document.querySelector('ul');
const div = document.querySelector('nav div');

menu.addEventListener('click', () => {
    menu.classList.toggle('menuopen');
    menu.classList.toggle('menuclosed');

    div.classList.toggle('hidden');
    div.classList.toggle('overlay');

    ul.classList.toggle('open');
    ul.classList.toggle('closed');
}, false);