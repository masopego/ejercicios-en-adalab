import React from 'react';

class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 'A',
      genre: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeGenres = this.handleChangeGenres.bind(this);
  }

  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  handleChangeGenres(ev) {
    const genres = this.state.genre;

    if (genres.includes(ev.target.value)) {
      const index = genres.findIndex((e) => e === ev.target.value);
      genres.splice(index, 1);
    } else {
      if (genres.length < 3) {
        genres.push(ev.target.value);
      }
    }
    this.setState({ genres });
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>
              Todos los públicos
              <input
                type="radio"
                checked={this.state.age === 'A'}
                name="age"
                value="A"
                onChange={this.handleChange}
              />
            </label>
            <label>
              7
              <input
                type="radio"
                checked={this.state.age === '7'}
                name="age"
                value="7"
                onChange={this.handleChange}
              />
            </label>
            <label>
              12
              <input
                type="radio"
                checked={this.state.age === '12'}
                name="age"
                value="12"
                onChange={this.handleChange}
              />
            </label>
            <label>
              16
              <input
                type="radio"
                checked={this.state.age === '16'}
                name="age"
                value="16"
                onChange={this.handleChange}
              />
            </label>
            <label>
              18
              <input
                type="radio"
                checked={this.state.age === '18'}
                name="age"
                value="18"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              {' '}
              Comedia
              <input
                type="checkbox"
                name="genre"
                checked={this.state.genre.includes('comedia')}
                value="comedia"
                onChange={this.handleChangeGenres}
              ></input>
            </label>
            <label>
              {' '}
              Drama
              <input
                type="checkbox"
                name="genre"
                value="drama"
                checked={this.state.genre.includes('drama')}
                onChange={this.handleChangeGenres}
              ></input>
            </label>
            <label>
              {' '}
              Fantasía
              <input
                type="checkbox"
                name="genre"
                value="fantasia"
                checked={this.state.genre.includes('fantasia')}
                onChange={this.handleChangeGenres}
              ></input>
            </label>
            <label>
              {' '}
              Acción
              <input
                type="checkbox"
                name="genre"
                value="accion"
                checked={this.state.genre.includes('accion')}
                onChange={this.handleChangeGenres}
              ></input>
            </label>
            <label>
              {' '}
              Familia
              <input
                type="checkbox"
                name="genre"
                value="familia"
                checked={this.state.genre.includes('familia')}
                onChange={this.handleChangeGenres}
              ></input>
            </label>
            <label>
              {' '}
              Terror
              <input
                type="checkbox"
                name="genre"
                value="terror"
                checked={this.state.genre.includes('terror')}
                onChange={this.handleChangeGenres}
              ></input>
            </label>
          </div>
        </form>
        <div>
          <p>{`Película clasificada ${this.state.age}`}</p>
          <p>{`Género: ${this.state.genre}`}</p>
        </div>
      </div>
    );
  }
}

export default FormThree;
