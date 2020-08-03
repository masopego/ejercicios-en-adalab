import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      text: '',
      option: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeOoptions = this.handleChangeOoptions.bind(this);
  }

  handleChange(ev) {
    this.setState({ name: ev.target.value });
  }
  handleChangeText(ev) {
    this.setState({ text: ev.target.value });
  }

  handleChangeOoptions(ev) {
    this.setState({ option: ev.target.value });
  }
  render() {
    return (
      <div>
        <form>
          <label htmlfor="name">
            {' '}
            Introduce tu nombre
            <input
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label htmlfor="description">
            {' '}
            Rellena la descripción
            <textarea
              id="description"
              value={this.state.text}
              onChange={this.handleChangeText}
            ></textarea>
          </label>
          <select
            value={this.state.option}
            onChange={this.handleChangeOoptions}
          >
            <option value="Español">Español</option>
            <option value="Inglés">Inglés</option>
            <option value="Portugués">Portugués</option>
          </select>
        </form>
        <div>
          <h2>{this.state.name}</h2>
          <p>{this.state.text}</p>
          <p>{this.state.option}</p>
        </div>
      </div>
    );
  }
}

export default Form;
