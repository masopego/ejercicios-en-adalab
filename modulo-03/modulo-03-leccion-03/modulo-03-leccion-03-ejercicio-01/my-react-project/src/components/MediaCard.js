import React from 'react';
import logo from '../logo.svg';

class MediaCard extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App__container">
          <div className="container__logo">
            <img src={logo} className="App-logo" alt="logo" />{' '}
          </div>
          <div className="header__text">
            <h1 className="title">Alex Guerrero</h1>
            <p>Sábado 18 de julio de 2020</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            volutpat odio. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Nulla facilisi. Etiam
            eget dolor neque. Nam dapibus felis et lacinia tincidunt. Etiam
            fringilla sed sem eu fringilla. Quisque elit massa, laoreet in
            fermentum sit amet, hendrerit vel orci. Nunc placerat mi vitae
            ligula tincidunt tempor. In eget sapien id magna aliquam tempus.
          </p>
          <div className="container__comments">
            <p>Leer más...</p>
            <p className="number__text">
              37 <i class="fas fa-heart"></i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MediaCard;
