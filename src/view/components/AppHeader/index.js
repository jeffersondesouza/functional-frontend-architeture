import React from "react";

import "./styles.scss";

const AppHeader = () => {
  return (
    <header className="AppHeader">
      <h1 className="AppHeader__title">Functional Beers</h1>
      <div className="AppHeader__counter">Beers: {0}</div>
    </header>
  );
};

export default AppHeader;
