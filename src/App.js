import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import ecom from './ecommerce.js';

class App extends React.Component {
  state = {
    ticketCount: 0,
    manager: '',
  };

async componentDidMount() {
  try {
    const tickets = await ecom.methods.numTickets().call();
    const manager = await ecom.methods.manager().call();

    console.log("Tickets fetched:", tickets);
    this.setState({ticketCount: tickets, mgr: manager});
  } catch (error) {
    console.error("Error fetching numTickets:", error);
  }
}



  render() {
    return (
      <div className="App">
        <h1>Ticket Contract</h1>
        <h2>
          There are {this.state.ticketCount} tickets.
          The manager is {this.state.mgr}.
        </h2>
        
      </div>
    );
  }
}

export default App;

