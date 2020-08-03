import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      option: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
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
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label htmlfor="description">
            {' '}
            Rellena la descripción
            <textarea
              id="description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            ></textarea>
          </label>
          <select
            value={this.state.option}
            name="option"
            onChange={this.handleChange}
          >
            <option value="Español">Español</option>
            <option value="Inglés">Inglés</option>
            <option value="Portugués">Portugués</option>
          </select>
        </form>
        <div>
          <h2>{this.state.name}</h2>
          <p>{this.state.description}</p>
          <p>{this.state.option}</p>
        </div>
      </div>
    );
  }
}

export default Form;
