import React, { Component } from 'react';
import './App.css';
import InvoicesComp from "./components/invoices.js"
import ClientsComp from './components/clients.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'

library.add(faSnowflake)

class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="compContainer">
        </div>
         <div className="compContainer">
            <ClientsComp />
        </div>
      </div>
    );
  }
}
//               <InvoicesComp />

export default App;
