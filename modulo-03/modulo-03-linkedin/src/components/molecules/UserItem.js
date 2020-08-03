import React from 'react';
import PropTypes from 'prop-types';

class UserItem extends React.Component {
  render() {
    return (
      <article>
        <img src={this.props.image} alt={this.props.name} />
        <h2>{this.props.name}</h2>
        <p>{this.props.city}</p>
        <p>{this.props.age}</p>
      </article>
    );
  }
}

UserItem.defaultProps = {
  image: 'https://via.placeholder.com/150',
  name: 'Special People',
  city: 'world',
  age: 25,
};

UserItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  city: PropTypes.string,
  age: PropTypes.number,
};

export default UserItem;
