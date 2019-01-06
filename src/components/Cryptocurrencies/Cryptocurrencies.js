import React, { Component } from "react";
import axios from "axios";
import "./Cryptocurrencies.css";
import Cryptocurrency from "../Cryptocurrency/Cryptocurrency";

class Cryptocurrencies extends Component {
  state = {
    cryptocurrencyData: []
  };

  fetchCryptocurrencyData() {
    axios
      .get("https://api.coinmarketcap.com/v1/ticker/?limit=5")
      .then(response => {
        const cryptocurrencyData = [...response.data];
        this.setState({ cryptocurrencyData: cryptocurrencyData });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.fetchCryptocurrencyData();
    this.interval = setInterval(
      () => this.fetchCryptocurrencyData(),
      300 * 1000
    );
  }

  render() {
    const cryptocurrencies = this.state.cryptocurrencyData.map(
      cryptocurrency => (
        <Cryptocurrency data={cryptocurrency} key={cryptocurrency.id} />
      )
    );

    return (
      <div className="cryptocurrencies-container">
        <ul className="cryptocurrencies">{cryptocurrencies}</ul>
      </div>
    );
  }
}

export default Cryptocurrencies;
