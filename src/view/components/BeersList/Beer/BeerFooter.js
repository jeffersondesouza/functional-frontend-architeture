import React from "react";

const BeerFooter = ({ name, tagline }) => (
  <footer className="BeerFooter">
    <p className="BeerFooter__name">{name}</p>
    <div className="BeerFooter__tagline">{tagline}</div>
  </footer>
);

export default BeerFooter;
