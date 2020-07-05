'use strict';

function query(element) {
  return document.querySelector(element);
}

const userInput = query('.js-name');
const submitButton = query('.js-button');
const resultContainer = query('.js-results');

function handlerfunction(ev) {
  ev.preventDefault();
  let userValue = userInput.value;
  clearResults();
  if (userValue.length === 0) {
    alert('Por favor, rellena los campos obligatorios.');
  } else {
    getPeople(userValue);
  }
}

submitButton.addEventListener('click', handlerfunction);

function getPeople(name) {
  fetch(`https://swapi.dev/api/people?search=${name}`)
    .then((reponse) => reponse.json())
    .then((data) => {
      if (data.count === 0) {
        const emptyResult = document.createElement('p');
        const textNode = document.createTextNode(
          'No hemos podido encontrar a ningún personaje con ese nombre. Por favor, revisa los campos rellenados. '
        );
        emptyResult.appendChild(textNode);
        resultContainer.appendChild(emptyResult);
      } else {
        const dataResult = data.results;
        const peopleList = document.createElement('ul');
        dataResult.forEach((element) => {
          const listElement = document.createElement('li');
          const textResult = document.createTextNode(
            `EL nombre es ${element.name} y su género es ${element.gender}.`
          );
          listElement.appendChild(textResult);
          peopleList.appendChild(listElement);
        });
        resultContainer.appendChild(peopleList);
      }
    });
}

function clearResults() {
  resultContainer.innerHTML = '';
}
