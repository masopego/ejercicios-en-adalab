import React from 'react';

const Birthday = (props) => {
  const getAge = function () {
    props.getNumber();
  };
  return (
    <>
      <p>Hoy tengo {props.number} años de edad </p>
      <button type="button" onClick={getAge}>
        Hazme más viejo
      </button>
    </>
  );
};

export default Birthday;
