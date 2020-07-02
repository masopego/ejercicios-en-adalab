"use strict";

const content = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ad officia rerum dignissimos`;

const container = document.querySelector(".container");
const element = document.querySelector(".text");

function handleMouseOver(ev) {
  console.log("He pasado por encima");
  container.innerHTML = container.innerHTML + `<p>${content}</p>`;
}

element.addEventListener("mouseover", handleMouseOver);

// "use strict";

// const content = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ad officia
// rerum dignissimos`;

// const newElement = document.createElement("p");
// const text = document.createTextNode(content);
// newElement.appendChild(text);
// newElement.style.background = "red";

// const element = document.querySelector(".text");
// const container = document.querySelector(".contenair");

// const addContent = () => container.appendChild(newElement);

// element.addEventListener("mouseover", addContent);
