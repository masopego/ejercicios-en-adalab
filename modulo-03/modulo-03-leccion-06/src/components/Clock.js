import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
    this.updateClock = this.updateClock.bind(this);
    setInterval(this.updateClock, 1000);
  }

  updateClock() {
    this.setState({ time: new Date() });
  }
  render() {
    return (
      <div>
        {this.state.time.getHours()}:{this.state.time.getMinutes()}:{' '}
        {this.state.time.getSeconds()}
      </div>
    );
  }
}

export default Clock;
