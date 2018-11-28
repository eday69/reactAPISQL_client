import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InvoicesComp from "./components/invoices.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="compContainer">
            <InvoicesComp />
        </div>
      </div>
    );
  }
}

export default App;
