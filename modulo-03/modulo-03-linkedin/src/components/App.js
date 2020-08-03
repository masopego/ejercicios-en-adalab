import React from 'react';
import '../App.css';
import { fetchContacts } from '../services/ApiServices';
import Board from './pages/Board';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filters: { genre: 'female', cities: [] },
      contactCities: [],
    };
  }
  componentDidMount() {
    this.fetchNewPeople();
  }

  fetchNewPeople() {
    fetchContacts().then((data) => {
      this.setState({
        contacts: data,
      });

      const cities = data.map((contact) => contact.location.city);
      this.setState({ contactCities: cities });
    });
  }

  applyFilters() {
    const filteredContacts = this.state.contacts.filter((contact) => {
      const isCityMatch =
        this.state.filters.cities.includes(contact.location.city) ||
        this.state.filters.cities.length === 0;

      const isGenreMatch =
        contact.gender === this.state.filters.genre ||
        this.state.filters.genre === 'all';

      return isCityMatch && isGenreMatch;
    });

    return filteredContacts;
  }
  render() {
    return (
      <Board
        list={this.applyFilters()}
        filters={this.state.filters}
        cities={this.state.contactCities}
        onChangeFilters={(newFilters) => this.setState({ filters: newFilters })}
      />
    );
  }
}

export default App;
