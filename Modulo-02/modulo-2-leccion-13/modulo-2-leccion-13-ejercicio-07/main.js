'use strict';

const times = [56, 9, 45, 28, 35];

const averageTimes = times.reduce((acc, number) => acc + number) / times.length;

console.log(averageTimes);
