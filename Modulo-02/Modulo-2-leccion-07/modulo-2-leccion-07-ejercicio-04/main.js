'use strict';

let year = 2017;
const totalYears = [];

for (let i = 0; i < 15; i++) {
  year += 3;
  totalYears[i] = year;
  console.log('ESTADO DE LOS AÑOS', totalYears);
}

console.log(`La próxima Luna del Cazador será en el año ${totalYears}`);
