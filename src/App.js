import React, { Component } from 'react';
import logo from './stackerine-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Stackerine First App</h1>
        </header>
        <p className="App-intro">Votre première application</p>
      </div>
    );
  }
}

export default App;
