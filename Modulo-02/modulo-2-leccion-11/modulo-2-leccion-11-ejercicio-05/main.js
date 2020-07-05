'use strict';

const colorInput = {
  lightInput: document.querySelector('.js-light-color'),
  darkInput: document.querySelector('.js-dark-color'),
};
const mainContainer = document.querySelector('.js-main-container');

function handlerfunction(ev) {
  const colorChecked = {
    light: colorInput.lightInput.checked,
    dark: colorInput.darkInput.checked,
  };
  if (colorChecked.dark) {
    enableDarkMode();
    localStorage.setItem('theme', 'dark');
  } else {
    enableLightMode();
    localStorage.setItem('theme', 'light');
  }
}

for (let key in colorInput) {
  colorInput[key].addEventListener('change', handlerfunction);
}

const theme = localStorage.getItem('theme') || 'dark';

/* Ternario
const theme = localStorage.getItem('theme')
  ? localStorage.getItem('theme')
  : 'dark';
*/

/* Tradicional con condiciones
let theme;
if (localStorage.getItem('theme')) {
  theme = localStorage.getItem('theme');
} else {
  theme = 'dark';
}
*/

if (theme === 'dark') {
  colorInput.darkInput.checked = true;
  enableDarkMode();
} else {
  enableLightMode();
}

function enableDarkMode() {
  mainContainer.classList.add('dark-container');
}

function enableLightMode() {
  mainContainer.classList.remove('dark-container');
  mainContainer.classList.add('light-container');
}
