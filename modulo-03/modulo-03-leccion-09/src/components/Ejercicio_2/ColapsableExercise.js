import React from 'react';
import data from './colapsables.json';
import Collapsable from './Collapsable';
import './collapsable.css';

class ColapsableExercise extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    return (
      <>
        {this.state.data.palettes.map((p, index) => {
          return (
            <Collapsable key={index} title={p.name}>
              <p>{p.from}</p>
            </Collapsable>
          );
        })}
      </>
    );
  }
}
export default ColapsableExercise;
