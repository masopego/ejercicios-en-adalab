import React from 'react';
import '../App.css';
import MediaCard from './MediaCard';
import MediaCardWithProps from './MediaCardWithProps';
import MediaCardWithFunction from './MediaCardWithFunction';
import logo from '../logo.svg';

function App() {
  return (
    <div className="App">
      <MediaCard />
      <MediaCardWithProps
        userName="Juan Marsé"
        date="19 de julio de 2020"
        text="In memoriam"
        likes="1K"
        logo={logo}
        heart={true}
      />
      <MediaCardWithFunction
        userName="Adrián Alonso"
        date="16 de febrero de 1991"
        text="In love"
        likes="1.000.000 TB"
        logo={logo}
        heart={true}
      />
    </div>
  );
}

export default App;
