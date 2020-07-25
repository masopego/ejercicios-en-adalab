import React, { useState } from 'react';
import '../App.css';
import Birthday from './Birthday';
import Presents from './Presents';

function App() {
  const [number, setNumber] = useState(20);
  const [box, setPresents] = useState(1);
  const handleNumber = () => {
    setNumber(number + 1);
  };
  const handlePresents = () => {
    setPresents(box + 1);
  };
  return (
    <div className="App">
      <Birthday number={number} getNumber={handleNumber} />
      <Presents presents={box} getBox={handlePresents} />
    </div>
  );
}

export default App;
