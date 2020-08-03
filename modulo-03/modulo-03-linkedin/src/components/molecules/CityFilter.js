import React from 'react';
import PropTypes from 'prop-types';

class CityFilter extends React.Component {
  constructor(props) {
    super(props);
    this.getCityCheckboxes = this.getCityCheckboxes.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(ev) {
    this.props.onFilterChange(ev.target.value, ev.target.checked);
  }
  getCityCheckboxes() {
    let locations = this.props.choices;
    return locations.map((location, index) => (
      <label key={index}>
        {' '}
        {location}
        <input
          type="checkbox"
          name="city"
          value={location}
          onChange={this.handleInputChange}
        />
      </label>
    ));
  }
  render() {
    return <>{this.getCityCheckboxes()}</>;
  }
}

CityFilter.defaultProps = {
  choices: [],
  onFilterChange: () => {},
};
CityFilter.propTypes = {
  choices: PropTypes.array,
  onFilterChange: PropTypes.func,
};

export default CityFilter;
