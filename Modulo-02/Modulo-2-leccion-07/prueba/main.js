'use strict';
// const heart = 'Corazón';
// const flower = 'Margarita';

// const life = {
//   hearth: 100,
//   flower: 100,
// };

// const atack = {
//   hearth: 45,
//   flower: 55,
// };

// let turn = 1;

// while (life.hearth > 0 && life.flower > 0) {
//   if (turn === 1) {
//     life.flower = life.flower - atack.hearth;
//     turn = 0;
//   } else {
//     life.hearth = life.hearth - atack.flower;
//     turn = 1;
//   }
// }

// if (life.hearth <= 0) {
//   console.log(`Gana ${flower}`);
// } else {
//   console.log(`Gana ${heart}`);
// }

const INITIAL_LIFE = 100;

const pikachu = {
  name: 'Rayito',
  attack: 20,
  life: INITIAL_LIFE,
  turn: 1,
};

const charmander = {
  name: 'Flama',
  attack: 30,
  life: INITIAL_LIFE,
  turn: 0,
};

let turn = pikachu.turn;
console.log('ESTADO INICIAL', charmander, pikachu);

let contador = 0;
while (pikachu.life > 0 && charmander.life > 0) {
  contador++;
  console.log(`----------- ESTE ES EL TURNO -------- ${contador}`);
  if (turn === pikachu.turn) {
    // turno pikachu
    charmander.life = charmander.life - pikachu.attack;
    turn = charmander.turn;
    console.log(
      `${pikachu.name} ha atacado a ${charmander.name}`,
      pikachu,
      charmander
    );
  } else {
    // turno charmander
    pikachu.life = pikachu.life - charmander.attack;
    turn = pikachu.turn;
    console.log(
      `${charmander.name} ha atacado a ${pikachu.name}`,
      pikachu,
      charmander
    );
  }

  console.log('ESTADO COMBATE', charmander, pikachu);
}

if (pikachu.life <= 0) {
  console.log(`El ganador es ${charmander.name}`);
} else {
  console.log(`El ganador es  ${pikachu.name}`);
}

console.log('ESTADO FINAL', charmander, pikachu);
