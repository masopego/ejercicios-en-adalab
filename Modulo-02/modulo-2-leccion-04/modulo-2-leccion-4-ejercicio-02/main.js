"use strict";

function calculateAverage(a, b, c, d) {
  const operation = parseInt((a + b + c + d) / 4);

  return operation;
}

const totalOperation = calculateAverage(30, 3, 10, 56);
const finalOperation = calculateAverage(2, 5, 4, 6);
const decesiveOperation = calculateAverage(100, 100, 100, 100);

console.log(totalOperation);
console.log(finalOperation);
console.log(decesiveOperation);
