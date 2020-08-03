import React from 'react';

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      initialColor: false,
    };
  }
  handleClick(ev) {
    this.setState((prevState, props) => {
      return {
        initialColor: !prevState.initialColor,
      };
    });
  }
  render() {
    return (
      <div
        className={`color__container ${
          this.state.initialColor ? '' : 'active'
        }`}
        onClick={this.handleClick}
      >
        {this.state.initialColor && <p>Soy color onicial</p>}
        {!this.state.initialColor && <p>Soy color contrario</p>}
      </div>
    );
  }
}

export default Color;
