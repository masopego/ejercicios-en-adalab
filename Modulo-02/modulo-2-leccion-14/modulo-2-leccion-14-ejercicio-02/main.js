'use strict';

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;

  if (counter <= 12) {
    const time = document.querySelector('.time');
    time.innerHTML = counter;
  } else {
    time.innerHTML = 12;
  }
};

setInterval(incrementAndShowCounter, 1000);
