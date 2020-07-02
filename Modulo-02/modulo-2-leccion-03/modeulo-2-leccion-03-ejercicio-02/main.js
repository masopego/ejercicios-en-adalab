"use strict";

let name = "Marisol";
let hello = "";

if (name === "Marisol") {
  hello = `Bienvenida, ${name}`;
} else {
  hello = "Lo siento pero el usuario que has introducido no está registrado";
}

const result = document.querySelector(".title");
result.innerHTML = hello;
