"use strict";

function calculateTicket(price) {
  const pricewithoutIVA = price;
  const pricewithIVA = price * 0.21;
  const totalPrice = pricewithoutIVA + pricewithIVA;
  const text = `El precio sin IVA: ${pricewithoutIVA}, IVA: ${pricewithIVA} y Total:${totalPrice} `;

  return text;
}
const ticketOne = calculateTicket(10);
const ticketTwo = calculateTicket(20);
const ticketThree = calculateTicket(100);

console.log(ticketOne);
console.log(ticketTwo);
console.log(ticketThree);
