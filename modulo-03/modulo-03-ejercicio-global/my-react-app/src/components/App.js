import React from 'react';
import '../stylesheets/App.css';
import Header from './Header';
import EmailList from './EmailList';
import EmailReader from './EmailReader';

function App() {
  return (
    <div className="App">
      <Header />
      <EmailList />
      <EmailReader />
    </div>
  );
}

export default App;
