import React, { Component } from 'react';
import axios from 'axios'
import TicketTable from './TicketTable'
import TicketForm from './TicketForm'

class App extends Component {
  constructor()
  {
    console.log('constructor')
    super()
    this.state = {
      tickets: []
    }
  }

  //life cycle methodd
  //componentWillMount()
  //{
  //  console.log('component will mount')
  //}

  //lifecycle method
  //will be called after the component is loaded on the browser
  componentDidMount()
  {
    console.log('component did mount')
    //es6
    axios.get(`http://dct-api-data.herokuapp.com/tickets?api_key=04d4fe74303871ab`)
    .then(response => this.setState(() => ({ tickets: response.data })))
    .catch(err => console.log(err))

    //es5
    /*axios.get(`http://dct-api-data.herokuapp.com/tickets?api_key=04d4fe74303871ab`)
    .then( function (response ) {
      this.setState ( function () {
      return {
        tickets: response.data
      }}
      )
    })
    .catch( function ( err)
    {
      console.log(err)
    }) */
    

  }
  render() {
    console.log('render')
    return (
      <div>
        <h1>Ticket Master </h1>
        <h2>Listing tickets - {  this.state.tickets.length }</h2>
        <TicketForm />
        <TicketTable tickets = { this.state.tickets.filter(ticket => ticket.status === "open")} ticketStatus = "Open" />
        <TicketTable tickets = { this.state.tickets.filter(ticket => ticket.status === "completed")} ticketStatus = "Completed"/>
      </div>
    );
  }
}

export default App;
