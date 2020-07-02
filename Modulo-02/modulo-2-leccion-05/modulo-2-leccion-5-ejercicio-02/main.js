"use strict";

const formText = document.querySelector("#name");
const submit = document.querySelector(".submit");

const insertText = function (event) {
  const content = `Hola ${formText.value}`;
  console.log(content);
};

submit.addEventListener("click", insertText);
