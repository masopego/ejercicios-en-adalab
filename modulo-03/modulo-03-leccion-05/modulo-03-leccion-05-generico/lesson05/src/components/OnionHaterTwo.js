import React from 'react';
import '../Onion.css';

class OnionHaterTwo extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(ev) {
    if (ev.target.value.toLowerCase().includes('cebolla')) {
      this.isHating = true;
    } else {
      this.isHating = false;
    }
    this.forceUpdate();
  }

  render() {
    const enableClass = this.isHating ? 'active' : '';
    return (
      <div className={'wrapper ' + enableClass}>
        <textarea onChange={this.handleChange}></textarea>
      </div>
    );
  }
}

export default OnionHaterTwo;
