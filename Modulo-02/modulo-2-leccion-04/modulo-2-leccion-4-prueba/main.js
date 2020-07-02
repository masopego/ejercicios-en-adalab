function sum(a, b) {
  const result = a + b;
  // const result2 = a + b;
  document.querySelector(".js-result").innerHTML = result;
  // return result;
}

const sumResult = sum(3, 4); //sumResult vale 7
const sumResult2 = sum(4, 6);

console.log(sumResult);
console.log(sumResult2);
