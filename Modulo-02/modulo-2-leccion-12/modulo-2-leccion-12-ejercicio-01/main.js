'use strict';

const list = document.querySelector('.js-list');

const numbers = [1, 2, 3];

for (let i = 0; i < numbers.length; i++) {
  const newElement = document.createElement('li');
  const newContent = document.createTextNode(numbers[i]);
  newElement.appendChild(newContent);

  list.appendChild(newElement);
}
