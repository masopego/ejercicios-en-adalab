'use strict';

const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 40 },
  { name: 'Cedric Diggory', time: 50 },
  { name: 'Cho Chang', time: 35 },
];

const getWinners = (lastWinner, nextRunner) => {
  if (nextRunner.time > lastWinner.time) {
    return nextRunner;
  } else {
    return lastWinner;
  }
};

const getWinners2 = (lastWinner, nextRunner) => {
  return nextRunner.time > lastWinner.time ? nextRunner : lastWinner;
};
const getWinners3 = (lastWinner, nextRunner) =>
  nextRunner.time > lastWinner.time ? nextRunner : lastWinner;

const runnersWinners = runners.reduce(getWinners);

const runnersWinners2 = runners.reduce(getWinners2);

const runnersWinners3 = runners.reduce(getWinners3);

console.log(`And the winner is ${runnersWinners.name}`);
console.log(`Y el ganador es ${runnersWinners2.name}`);
console.log(`Et le gagnant est ${runnersWinners3.name}`);
