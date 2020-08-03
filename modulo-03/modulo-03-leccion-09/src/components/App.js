import React from 'react';
import '../App.css';
import Form from './Ejercicio_1/Form';
import ColapsableExercise from './Ejercicio_2/ColapsableExercise';
import Podium from './Ejercicio_4/Podium';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Podium />
      </div>
    );
  }
}

export default App;
