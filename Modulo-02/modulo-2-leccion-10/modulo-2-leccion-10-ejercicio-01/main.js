'use strict';

const container = document.querySelector('.js-result');

fetch('https://api.rand.fun/number/integer')
  .then((response) => response.json())
  .then((data) => (container.innerHTML = data.result));
