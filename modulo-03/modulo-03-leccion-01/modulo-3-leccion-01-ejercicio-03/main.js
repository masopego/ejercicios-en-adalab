'use strict';

class Square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    return this.side * 4;
  }

  area() {
    return this.side + this.side;
  }
}

const one = new Square(1);
console.log(one.perimeter());
const three = new Square(3);
console.log(three.perimeter());
const seven = new Square(7);
console.log(seven.perimeter());
