'use strict';

const marks = [5, 4, 6, 7, 9];
console.log(marks);

const inflatedMarks = marks.map((mark) => mark + 1);
// const getinflatedMarks = (mark) => mark + 1;
// const inflatedMarks = marks.map(getinflatedMarks);

console.log(inflatedMarks);
