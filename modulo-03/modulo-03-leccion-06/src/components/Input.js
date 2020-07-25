import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(ev) {
    this.setState({ text: ev.target.value });
  }
  render() {
    return (
      <>
        <label>
          Escribe Aquí
          <input type="text" onChange={this.handleChange} />
        </label>
        <p>{this.state.text}</p>
        <p>El numero de carateres es : {this.state.text.length}</p>
      </>
    );
  }
}

export default Input;
