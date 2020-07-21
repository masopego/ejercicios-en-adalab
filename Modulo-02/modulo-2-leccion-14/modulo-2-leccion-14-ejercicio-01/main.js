'use strict';

let counter = 0;

const incrementAndShowCounter = () => {
  counter = counter + 2;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 1000);
