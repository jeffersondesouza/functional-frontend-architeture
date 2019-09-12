import React from "react";

import "./styles.scss";

const BeerDetails = props => {
  const { id, imageUrl, name, tagline, abv, description } = props;

  if (!id) {
    return <div className="BeerDetails">Não encotrada</div>;
  }

  return (
    <div className="BeerDetails">
      <picture className="BeerDetails__picture">
        <img className="BeerDetails__img" src={imageUrl} alt={name} />
      </picture>
      <div className="BeerDetails__summary">
        <p className="BeerDetails__summary-name">{name}</p>
        <p className="BeerDetails__summary-tagline">{tagline}</p>
        <p className="BeerDetails__summary-description">{description}</p>
        <p className="BeerDetails__summary-abv">Teor: {abv}</p>
      </div>
    </div>
  );
};

export default BeerDetails;
