'use strict';

let numbers = [
  5,
  8.1,
  6.4,
  8,
  9.3,
  6.7,
  7.4,
  7,
  8,
  6,
  6.6,
  8,
  8.7,
  7.5,
  7.7,
  7,
  10,
  9.6,
  5.4,
];

const numberofSubjects = numbers.length;

let total = 0;

for (let i = 0; i < numberofSubjects; i++) {
  total = total + numbers[i];
  console.log(`Estado media`, total);
}

console.log(`La media final es ${total / numberofSubjects}`);

console.log(numbers.length);

// function average() {
//   for (let i = 0; i < numberofSubjects; i++) {
//     total = total + numbers[i];
//     console.log(`Estado media`, total);
//   }

//   return `La media final es ${total / numberofSubjects}`;
// }

// console.log(average());
