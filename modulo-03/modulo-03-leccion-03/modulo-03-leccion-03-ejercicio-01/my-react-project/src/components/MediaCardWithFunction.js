import React from 'react';

function MediaCardWithFunction(props) {
  const classHeart = props.heart ? 'active' : '';
  return (
    <div className="App">
      <div className="App__container">
        <div className="container__logo">
          <img src={props.logo} className="App-logo" alt="logo" />{' '}
        </div>
        <div className="header__text">
          <h1 className="title">{props.userName}</h1>
          <p>{props.date}</p>
        </div>
        <p>{props.text}</p>
        <div className="container__comments">
          <p>Leer más...</p>
          <p className="number__text">
            {props.likes} <i class={'fas fa-heart ' + classHeart}></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MediaCardWithFunction;
