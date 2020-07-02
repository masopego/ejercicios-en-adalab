'use strict';

const adalaber1 = {
  name: 'Susana',
  age: 34,
  occupation: 'periodista',
  showBio: function () {
    return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.occupation}. `;
  },
};

console.log(adalaber1.showBio());

const adalaber2 = {
  name: 'Rocío',
  age: 25,
  occupation: 'actriz',
  showBio: function () {
    return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.occupation}. `;
  },
};

console.log(adalaber2.showBio());
