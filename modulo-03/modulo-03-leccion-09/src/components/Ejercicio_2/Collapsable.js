import React from 'react';
import PropTypes from 'prop-types';

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
    };
    this.toggleCollapsable = this.toggleCollapsable.bind(this);
  }

  toggleCollapsable() {
    this.setState((oldState) => {
      return {
        open: !oldState.open,
      };
    });
  }
  render() {
    return (
      <div className="collapsable">
        <h1 onClick={this.toggleCollapsable}>{this.props.title}</h1>
        <div
          className={
            this.state.open
              ? 'collapsable-content--open'
              : 'collapsable-content'
          }
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

Collapsable.defaultProps = {
  title: 'Mi titulo',
  open: false,
};

Collapsable.propTypes = {
  title: PropTypes.string,
  false: PropTypes.bool,
};

export default Collapsable;
