import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MainForm } from './containers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainForm />
      </div>
    );
  }
}

export default App;
