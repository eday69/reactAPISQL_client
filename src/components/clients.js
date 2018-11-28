import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ClientsComponent extends Component {
   constructor(props) {
      super(props);
      this.state = {
         clients: [],
         loading: true
       }
      }
       componentDidMount() {  
         axios.get("http://localhost:5000/clients")
           .then(response => {
             this.setState({
               clients: response.data,
               loading: false
             });
           })
           .catch(error => {
             console.log(error);
           });
       }

   render()
   {
    let data;
    if (this.state.loading) {
      data = <FontAwesomeIcon icon="snowflake" size="7x" spin /> 
    } else {
      data = this.state.clients.map((d) => <li key={d.id}>{d.id} {d.name}</li>)
    }
      return(
      <div>
            {data}
       </div>
      )
   }
}
