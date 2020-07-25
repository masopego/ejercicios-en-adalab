import React from 'react';
import '../App.css';
import Input from './Input';
import Color from './Color';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <Input />
      <Color />
      Reloj
      <Clock />
    </div>
  );
}

export default App;
