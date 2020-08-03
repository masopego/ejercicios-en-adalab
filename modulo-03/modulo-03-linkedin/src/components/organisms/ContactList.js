import React from 'react';
import PropTypes from 'prop-types';
import UserItem from '../molecules/UserItem';

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.getUsers = this.getUsers.bind(this);
  }
  getUsers() {
    let users = this.props.list;
    console.log(users);
    return users.map((user, index) => (
      <li key={index}>
        <UserItem
          image={user.picture.large}
          name={`${user.name.title} ${user.name.first} ${user.name.last}`}
          city={user.location.city}
          age={user.dob.age}
        />
      </li>
    ));
  }
  render() {
    return (
      <>
        <ul>{this.getUsers()}</ul>
      </>
    );
  }
}

ContactList.defaultProps = {
  list: [],
};
ContactList.propTypes = {
  list: PropTypes.array,
};

export default ContactList;
