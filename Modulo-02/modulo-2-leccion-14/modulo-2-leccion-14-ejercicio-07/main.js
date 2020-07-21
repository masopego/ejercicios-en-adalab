'use strict';

let timer;
const button = document.querySelector('.js-button');
const msg = document.querySelector('.js-msg');

function stopTimer() {
  msg.innerHTML = '¿te has dormido?';
}

function controlTime() {
  msg.innerHTML = '';
  timer = setTimeout(stopTimer, 10000);
}

timer = setTimeout(stopTimer, 10000);
button.addEventListener('click', controlTime);
