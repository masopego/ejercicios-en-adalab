'use strict';

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];

// 1. Mostrar una frase que indique cuántas tareas hay
console.log(`Tengo que hacer ${tasks.length} tareas`);

// 2. Pintar todas las tareas en pantalla

function addTaskList() {}

function drawTask() {
  const drawText = document.querySelector('.js-list');

  let content = '';
  for (let i = 0; i < tasks.length; i++) {
    content = content + `<li>${tasks[i].name}</li>`;
  }

  drawText.innerHTML = content;
  return content;
}

drawTask();

console.log(content);

function completeTask() {
  if (tasks.completed === false) {
    drawText.style.textdecoration = 'underline';
  }
}
