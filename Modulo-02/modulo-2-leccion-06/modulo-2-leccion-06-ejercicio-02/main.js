'use strict';

const adalaber1 = {
  name: 'Susana',
  age: 34,
  occupation: 'periodista',
  run: (phrase) => `Estoy andando`,
  runAMarathon: (distance) =>
    `Estoy corriendo una maratón de ${distance} kilometros`,
};

console.log(adalaber1.run());
console.log(adalaber1.runAMarathon(50));
