'use strict';

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');

  if (counter <= 60) {
    time.innerHTML = counter + ' segundos';
  } else {
    time.innerHTML = '1 minuto';
  }
};

setInterval(incrementAndShowCounter, 1000);
