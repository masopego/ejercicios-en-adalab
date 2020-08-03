import React from 'react';

class FormFour extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();
    this.state = {
      preview: '',
    };
  }

  handleSubmit(ev) {
    ev.preventDefault();
  }
  handleChange(ev) {
    const reader = new FileReader();
    reader.readAsDataURL(this.fileInput.current.files[0]);
    reader.addEventListener('load', (event) =>
      this.setState({ preview: event.target.result })
    );
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Subir archivo:
            <input
              type="file"
              ref={this.fileInput}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
        {this.state.preview !== '' ? <img src={this.state.preview} /> : ''}
      </>
    );
  }
}

export default FormFour;
