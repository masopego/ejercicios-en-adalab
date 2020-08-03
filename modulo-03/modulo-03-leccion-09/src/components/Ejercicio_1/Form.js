import React from 'react';
import ItemForm from './ItemForm';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberInput: 0,
    };
    this.getListNumber = this.getListNumber.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  changeState(value) {
    this.setState({ numberInput: value });
  }
  getListNumber() {
    const numbers = [1, 4, 6, 8, 45, 89];
    const listNumber = numbers
      .filter((num) => num > this.state.numberInput)
      .map((num) => <li key={num}>{num}</li>);
    console.log(listNumber);
    return listNumber;
  }

  render() {
    return (
      <>
        <ItemForm onChangeNumber={this.changeState} />
        <ul>{this.getListNumber()}</ul>
      </>
    );
  }
}

export default Form;
