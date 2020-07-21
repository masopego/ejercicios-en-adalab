'use strcit';

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const getEvenPins = (pins) => {
  const usersEnter = pins.pin % 2 === 0 && pins.isPremium === true;
  return usersEnter;
};

const evenPins = users.filter(getEvenPins);
console.log(evenPins);
