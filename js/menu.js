const menu = document.querySelector('header button');
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

const btn = document.querySelector('.close_button');
const screenshot = document.querySelector('.screenshot');
let screenshotIsHere = true;

btn.addEventListener('click', () => {
    screenshot.remove();
    header.classList.remove('header');
    screenshotIsHere = false;
}, false);