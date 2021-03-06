import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MainForm } from './containers'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainForm />
        </Provider>
    );
  }
}

export default App;
