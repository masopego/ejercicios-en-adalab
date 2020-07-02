"use strict";

const addText = () => (textElement.innerHTML = content);

let content = "Mi primer click, ¡ole yo y la mujer que me parió!";
const textElement = document.querySelector(".text");
textElement.addEventListener("click", addText);
