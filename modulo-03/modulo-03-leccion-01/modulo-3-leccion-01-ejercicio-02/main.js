'use strict';

class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }

  perimeter() {
    return this.base * 4;
  }

  area() {
    return this.base + this.height;
  }
}

class Square extends Polygon {
  constructor(height) {
    super(height);
    this.side = base;
  }
}

class Triangle extends Polygon {
  constructor(base, height) {
    super(base, height);
  }
}

// const one = new Square(1);
// console.log(one.perimeter());
// const three = new Square(3);
// console.log(three.perimeter());
// const seven = new Square(7);
// console.log(seven.perimeter());
