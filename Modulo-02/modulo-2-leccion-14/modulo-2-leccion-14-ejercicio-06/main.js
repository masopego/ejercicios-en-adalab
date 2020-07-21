'use strict';

const button = document.querySelector('.js-button');
let timerStarted;
let counter = 0;
let timer;

function gettimer() {
  timerStarted = true;
  counter++;
  const time = document.querySelector('.js-time');
  time.innerHTML = counter;
}

function handlertime(ev) {
  if (timerStarted === true) {
    timerStarted = false;
    clearInterval(timer);
    button.innerHTML = 'Continuar';
  } else {
    timerStarted = true;
    timer = setInterval(gettimer, 1000);
    button.innerHTML = 'Parar';
  }
}

timer = setInterval(gettimer, 1000);
button.addEventListener('click', handlertime);
