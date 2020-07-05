'use strict';

const userForm = document.querySelector('.js-form');
const userInfo = {
  name: document.querySelector('.js-user-name'),
  lastName: document.querySelector('.js-user-lastname'),
  text: document.querySelector('.js-text-coments'),
};

function handlerfunction(ev) {
  const userValues = {
    userName: userInfo.name.value,
    userLastName: userInfo.lastName.value,
    userText: userInfo.text.value,
  };

  localStorage.setItem('userValues', JSON.stringify(userValues));
}

for (let key in userInfo) {
  userInfo[key].addEventListener('keyup', handlerfunction);
}

const userValues = JSON.parse(localStorage.getItem('userValues'));
console.log(userValues);

if (userValues != null) {
  userInfo.name.value = userValues.userName;
  userInfo.text.value = userValues.userText;
  userInfo.lastName.value = userValues.userLastName;
}
