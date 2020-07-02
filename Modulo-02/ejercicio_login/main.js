'use strict';

const userName = document.querySelector('.js-user-name');
const userPassword = document.querySelector('.js-user-password');
const textError = document.querySelector('.js-error-wrapper');
const submitButton = document.querySelector('.js-login-button');
submitButton.addEventListener('click', handlerButton);

//Datos de usuario
const userInfo = {
  name: 'front23',
  password: 'bicicleta',
};

//Número de intentos
let attemps = 0;

function handlerButton(ev) {
  if (attemps >= 3) {
    alert('Estás bloqueado');
    return;
  }
  checkCredential();
}

//
const getUserCredential = function () {
  const userData = {
    name: userName.value,
    password: userPassword.value,
  };
  return userData;
};

function checkCredential() {
  const userCredential = getUserCredential();
  if (
    userInfo.name === userCredential.name &&
    userInfo.password === userCredential.password
  ) {
    alert('Estás dentro');
  } else {
    attemps++;
    textError.classList.remove('hidden');
  }
}
