import React from 'react';
import GenreFilter from '../molecules/GenreFilter';
import CityFilter from '../molecules/CityFilter';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.handlerGenreChange = this.handlerGenreChange.bind(this);
    this.handlerCitiesChange = this.handlerCitiesChange.bind(this);
  }

  handlerGenreChange(genre) {
    const newFilters = this.props.filters;
    newFilters.genre = genre;
    this.props.onChange(newFilters);
  }

  handlerCitiesChange(city, enabled) {
    const newFilters = this.props.filters;

    if (enabled) {
      newFilters.cities.push(city);
    } else {
      newFilters.cities = newFilters.cities.filter((c) => c !== city);
    }

    this.props.onChange(newFilters);
  }

  render() {
    return (
      <>
        <GenreFilter
          checked={this.props.filters.genre}
          onFilterChange={this.handlerGenreChange}
        />
        <CityFilter
          choices={this.props.cities}
          onFilterChange={this.handlerCitiesChange}
        />
      </>
    );
  }
}

Filters.defaultProps = {
  cities: [],
};

Filters.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
  cities: PropTypes.array,
};
export default Filters;
