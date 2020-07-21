'use strict';

const PIN_TO_FIND = 5232;

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

// const equalPin = users.find((user) => user.pin === PIN_TO_FIND);
// console.log(`La usuaria encontrada es ${equalPin.name}`);

const userPosition = users.findIndex((user) => user.pin === PIN_TO_FIND);
console.log(userPosition);
users.splice(userPosition, 1);

console.log(users);
