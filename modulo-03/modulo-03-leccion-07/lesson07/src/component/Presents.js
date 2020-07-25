import React from 'react';

const Presents = (props) => {
  return (
    <>
      <p>Tengo {props.presents} regalo</p>
      <button type="submit" onClick={() => props.getBox()}>
        Dame regalos
      </button>
    </>
  );
};

export default Presents;
