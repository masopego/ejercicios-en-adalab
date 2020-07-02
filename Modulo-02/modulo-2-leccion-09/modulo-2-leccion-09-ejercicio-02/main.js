'use strict';

function get100Numbers() {
  const arr = [];
  for (let i = 1; i <= 100; i++) {
    arr.push(i);
  }
  return arr;
}

function getReversed100Numbers() {
  const finalResult = get100Numbers();
  finalResult.reverse();
  return finalResult;
}

console.log(getReversed100Numbers());
