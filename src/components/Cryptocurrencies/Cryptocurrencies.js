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
        const cryptoData = response.data.map(element => element);
        this.setState({ cryptocurrencyData: cryptoData });
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
    const cryptocData = this.state.cryptocurrencyData.map(element => (
      <Cryptocurrency data={element} key={element.id} />
    ));
    return (
      <div className="cryptocurrencies-container">
        <ul className="cryptocurrencies">{cryptocData}</ul>
        <p>
          Information updated every 5 minute courtesy of{" "}
          <a href="https://coinmarketcap.com/">coinmarketcap.com</a>
        </p>
      </div>
    );
  }
}

export default Cryptocurrencies;
