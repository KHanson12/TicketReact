import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import ecom from './ecommerce.js';

class App extends React.Component {
  state = {
    ticketCount: 0,
  };

async componentDidMount() {
  try {
    const tickets = await ecom.methods.numTickets().call();

    console.log("Tickets fetched:", tickets);
    this.setState({ ticketCount: tickets });
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
        </h2>
        <p>
          Buy Ticket: <input placeholder="Enter a ticket ID"></input>
        </p>
        <button type="submit">Buy</button>
        <p>
          Offer A Ticket Swap: <input placeholder="Enter a ticket ID"></input>
        </p>
        <button type="submit">Offer Swap</button>
        <p>
          Accept a Swap: <input placeholder="Enter a ticket ID"></input>
        </p>
        <button type="submit">Accept Swap</button>
        <p>
          Resell Your Ticket: <input placeholder="Enter a price"></input>
        </p>
        <button type="submit">Resell</button>
        <p>
          Accept Another User's Resale: <input placeholder="Enter a ticket ID"></input>
        </p>
        <button type="submit">Accept Resale</button>
      </div>
    );
  }
}

export default App;

