import React, { Component } from 'react';
import '../reactClient.css';

class InvoicesComp extends Component {

  getInvoices() {
        fetch('http://127.0.0.1:5000/invoices', {'mode': 'no-cors'})
          .then(response => { console.log(response); return response.json()})
          .then(function(myJson) {
        //                var info =JSON.stringify(myJson);
            var result = '';
            myJson.forEach((data, index, self) => {
                result += `<div className="invRow">
                             <div className="invName">Inv # ${data.id}</div>
                             <div className="invAmt">$${data.total}</div>
                           </div>`;
            });
            console.log(result);
          });
  }

  render() {
    let listInvoices = this.getInvoices();
    return (
      <div className="compInvoices">
        <header className="App-header">
          Inv Component
        </header>
        <div className="invTotal">
        $999,999.99
        </div>
        <div className="invList">
            {listInvoices}
        </div>
      </div>
    );
  }

}

export default InvoicesComp;
