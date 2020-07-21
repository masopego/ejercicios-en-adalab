import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const person = {
    fullName: {
      name: 'Alex',
      lastName: 'Guerrero',
    },
    date: 'Sábado 18 de julio de 2020',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
    volutpat odio. Pellentesque habitant morbi tristique senectus et netus
    et malesuada fames ac turpis egestas. Nulla facilisi. Etiam eget dolor
    neque. Nam dapibus felis et lacinia tincidunt. Etiam fringilla sed sem
    eu fringilla. Quisque elit massa, laoreet in fermentum sit amet,
    hendrerit vel orci. Nunc placerat mi vitae ligula tincidunt tempor. In
    eget sapien id magna aliquam tempus.`,
    readmore: 'Leer más...',
    numberComments: '37',
  };
  const cardComponent = (
    <div className="App">
      <div className="App__container">
        <div className="container__logo">
          <img src={logo} className="App-logo" alt="logo" />{' '}
        </div>
        <div className="header__text">
          <h1 className="title">
            {person.fullName.name}, {person.fullName.lastName}
          </h1>
          <p>{person.date}</p>
        </div>
        <p>{person.text}</p>
        <div className="container__comments">
          <p>{person.readmore}</p>
          <p className="number__text">
            {person.numberComments} <i class="fas fa-heart"></i>
          </p>
        </div>
      </div>
    </div>
  );

  return cardComponent;
}

export default App;
