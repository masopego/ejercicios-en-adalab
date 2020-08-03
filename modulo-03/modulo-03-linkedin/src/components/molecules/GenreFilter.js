import React from 'react';
import PropTypes from 'prop-types';

class GenreFilter extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeRadioValue = this.onChangeRadioValue.bind(this);
  }
  onChangeRadioValue(ev) {
    this.props.onFilterChange(ev.currentTarget.value);
  }
  render() {
    return (
      <>
        <label>
          {' '}
          Todos
          <input
            type="radio"
            name="genre"
            value="all"
            checked={this.props.checked === 'all'}
            onChange={this.onChangeRadioValue}
          />
        </label>
        <label>
          {' '}
          Mujer
          <input
            type="radio"
            name="genre"
            value="female"
            checked={this.props.checked === 'female'}
            onChange={this.onChangeRadioValue}
          />{' '}
        </label>
        <label>
          {' '}
          Hombre
          <input
            type="radio"
            name="genre"
            value="male"
            checked={this.props.checked === 'male'}
            onChange={this.onChangeRadioValue}
          />
        </label>
      </>
    );
  }
}

GenreFilter.defaultProps = {
  checked: 'all',
  onFilterChange: () => {},
};
GenreFilter.propTypes = {
  checked: PropTypes.oneOf(['all', 'female', 'male']).isRequired,
  onFilterChange: PropTypes.func,
};

export default GenreFilter;
