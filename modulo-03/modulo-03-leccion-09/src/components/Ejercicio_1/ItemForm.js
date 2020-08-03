import React from 'react';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    ev.preventDefault();
    this.props.onChangeNumber(ev.target.value);
  }
  render() {
    return (
      <>
        <form>
          <input type="number" onChange={this.handleChange} />
          <input type="checkbox" />
        </form>
      </>
    );
  }
}

export default ItemForm;
