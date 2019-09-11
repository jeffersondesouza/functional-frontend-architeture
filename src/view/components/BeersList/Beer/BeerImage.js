import React from "react";

const BeerImage = ({ name, imageUrl }) => (
  <picture className="BeerImage">
    <img
      className="BeerImage__img"
      src={imageUrl}
      alt={`Uma foto da cerveja ${name}`}
    />
  </picture>
);

export default BeerImage;
