import React from 'react';

class Child extends React.Component {
  render() {
    return (
      <>
        <p>This is child number {this.props.match.params.id}</p>
        <p>Holi caracoliiiiii {this.props.babyemoji}</p>
      </>
    );
  }
}

export default Child;
