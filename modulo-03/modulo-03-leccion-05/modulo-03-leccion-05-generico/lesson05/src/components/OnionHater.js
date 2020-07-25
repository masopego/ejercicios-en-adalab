import React from 'react';

function OnionHater() {
  const onChangeListener = (ev) =>
    ev.target.value.includes('cebolla') && alert('ODIO LA CEBOLLA');
  return <textarea onChange={onChangeListener}></textarea>;
}

export default OnionHater;
