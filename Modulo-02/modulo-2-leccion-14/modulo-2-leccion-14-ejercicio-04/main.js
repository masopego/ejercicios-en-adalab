'use strict';

const removeMsg = () => {
  const msg = document.querySelector('.msg');
  msg.innerHTML = 'Su sesión ha expirado';
};

setTimeout(removeMsg, 15000);
