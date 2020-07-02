'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNomber() {
  const evenNumbers = getEvenNumbers();
  const oddNumbers = getOddNumbers();

  return evenNumbers.concat(oddNumbers);
}

console.log(bestLostNomber());

function getEvenNumbers() {
  const arr1 = [];

  for (const number of lostNumbers) {
    if (isEven(number)) {
      arr1.push(number);
    }
  }
  return arr1;
}

function getOddNumbers() {
  const arr2 = [];

  for (const number of lostNumbers) {
    if (isMultiphy(number)) {
      arr2.push(number);
    }
  }
  return arr2;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isMultiphy(number) {
  if (number % 3 === 0) {
    return true;
  } else {
    return false;
  }
}
