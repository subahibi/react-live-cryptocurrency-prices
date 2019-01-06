import React from "react";
import "./Cryptocurrency.css";

const Cryptocurrency = ({ data }) => {
  const {
    id,
    name,
    symbol,
    price_usd,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d
  } = data;

  return (
    <li className={"cryptocurrency " + id}>
      <p className="cryptocurrency-name">
        {name} ({symbol})
      </p>
      <h1>${(+price_usd).toFixed(2)}</h1>
      <p>
        <span className={percent_change_1h < 0 ? "minus" : "plus"}>
          {percent_change_1h}%
        </span>{" "}
        1h
      </p>
      <p>
        <span className={percent_change_24h < 0 ? "minus" : "plus"}>
          {percent_change_24h}%
        </span>{" "}
        24h
      </p>
      <p>
        <span className={percent_change_7d < 0 ? "minus" : "plus"}>
          {percent_change_7d}%
        </span>{" "}
        7d
      </p>
    </li>
  );
};

export default Cryptocurrency;
