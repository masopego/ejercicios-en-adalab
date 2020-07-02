"use strict";

function isEven(a) {
  const module = a % 2;

  if (module === 0) {
    return true;
  }

  return false;
}

function isEvenAdri(a) {
  return a % 2 === 0;
}

const isEvenAnonymous = (a) => a % 2 === 0;

const operation = isEvenAnonymous(13);

console.log(operation);

let valor = 10;
valor /= 2;
console.log(valor);
