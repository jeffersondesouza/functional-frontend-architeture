import * as React from "react";
import { Link } from "react-router-dom";
import BeerFooter from "./BeerFooter";

import "./styles.scss";
import BeerImage from "./BeerImage";

const Beer = props => {
  const { id, abv, name, imageUrl, tagline } = props;

  return (
    <div className="Beer">
      <Link to={`/cervejas/${id}`}>
        <BeerImage imageUrl={imageUrl} name={name} />
        <BeerFooter abv={abv} name={name} tagline={tagline} />
      </Link>
    </div>
  );
};

export default Beer;
