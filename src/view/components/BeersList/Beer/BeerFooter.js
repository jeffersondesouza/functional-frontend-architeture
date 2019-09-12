import React from "react";

const BeerFooter = ({ name, tagline, abv }) => (
  <footer className="BeerFooter">
    <p className="BeerFooter__name">{name}</p>
    <div className="BeerFooter__tagline">{tagline}</div>
    <div className="BeerFooter__abv">Teor: {abv}</div>
  </footer>
);

export default BeerFooter;
