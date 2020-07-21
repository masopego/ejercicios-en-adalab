import React from 'react';
import '../App.css';

class MediaCardWithProps extends React.Component {
  render() {
    const classHeart = this.props.heart ? 'active' : '';
    return (
      <div className="App">
        <div className="App__container">
          <div className="container__logo">
            <img src={this.props.logo} className="App-logo" alt="logo" />{' '}
          </div>
          <div className="header__text">
            <h1 className="title">{this.props.userName}</h1>
            <p>{this.props.date}</p>
          </div>
          <p>{this.props.text}</p>
          <div className="container__comments">
            <p>Leer más...</p>
            <p className="number__text">
              {this.props.likes} <i class={'fas fa-heart ' + classHeart}></i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MediaCardWithProps;
