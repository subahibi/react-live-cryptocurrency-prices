import React, { Component } from "react";
import "./App.css";
import Cryptocurrencies from "./components/Cryptocurrencies/Cryptocurrencies";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h2>Live Cryptocurrency Prices</h2>
        </header>
        <Cryptocurrencies />
      </div>
    );
  }
}

export default App;
