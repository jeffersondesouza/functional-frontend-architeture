import React from "react";

import "./styles.scss";
import Beer from "./Beer";

const BeersList = ({ beers = [] }) => {
  return (
    <ul className="BeersList">
      {beers.map(beer => (
        <li key={beer.id}>
          <Beer {...beer} />
        </li>
      ))}
    </ul>
  );
};

export default BeersList;
