'use strict';

class Square {
  perimeter(side) {
    return side * 4;
  }

  area(side) {
    return side + side;
  }
}

const totalSide = new Square();
const totalPerimeter = totalSide.perimeter(9);
const totalArea = totalSide.area(9);

console.log(totalPerimeter);
console.log(totalArea);
