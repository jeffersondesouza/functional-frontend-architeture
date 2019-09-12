import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const AppHeader = () => {
  return (
    <header className="AppHeader">
      <Link to="/">
        <h1 className="AppHeader__title">Functional Cervas</h1>
      </Link>
      <div className="AppHeader__counter">Total: {0}</div>
    </header>
  );
};

export default AppHeader;
