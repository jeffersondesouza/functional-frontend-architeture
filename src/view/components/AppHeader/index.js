import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const AppHeader = ({ totalBeers }) => {
  return (
    <header className="AppHeader">
      <Link to="/">
        <h1 className="AppHeader__title">Functional Cervas</h1>
      </Link>
      <div className="AppHeader__counter">Total: {totalBeers}</div>
    </header>
  );
};

export default AppHeader;
