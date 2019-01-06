import React from "react";
import "./App.css";
import Cryptocurrencies from "./components/Cryptocurrencies/Cryptocurrencies";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h2>Live Cryptocurrency Prices</h2>
      </header>
      <Cryptocurrencies />
      <footer className="app-footer">
        Information updated every 5 minute courtesy of{" "}
        <a href="https://coinmarketcap.com/">coinmarketcap.com</a>
      </footer>
    </div>
  );
};

export default App;
