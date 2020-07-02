'use strict';

function get100Numbers() {
  const arr = [];
  for (let i = 1; i <= 100; i++) {
    arr.push(i);
    console.log(`Mi número es ${arr[i - 1]}`);
  }
  console.log(arr);
  return arr;
}

const finalResult = get100Numbers();
