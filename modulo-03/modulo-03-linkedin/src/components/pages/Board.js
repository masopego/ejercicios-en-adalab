import React from 'react';
import PropTypes from 'prop-types';
import ContactList from '../organisms/ContactList';
import Filters from '../organisms/Filters';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilters = this.handleFilters.bind(this);
  }
  handleFilters(filters) {
    this.props.onChangeFilters(filters);
  }
  render() {
    return (
      <>
        <Filters
          filters={this.props.filters}
          onChange={this.handleFilters}
          cities={this.props.cities}
        />
        <ContactList list={this.props.list} />
      </>
    );
  }
}

Board.defaultProps = {
  list: [],
  cities: [],
  filters: {
    genre: 'all',
  },
  onChangeFilters: () => {},
};
Board.propTypes = {
  list: PropTypes.array,
  filters: PropTypes.object,
  cities: PropTypes.array,
  onChangeFilters: PropTypes.func,
};

export default Board;
