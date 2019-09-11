import React from "react";

import "./styles.scss";
import { BeersListContainer, FilterBeersContainer } from "../../containers";

const BeersListPage = () => {
  return (
    <div className="BeersListPage">
      <div className="BeersListPage__filter">
        <FilterBeersContainer />
      </div>
      <div>
        <BeersListContainer />
      </div>
    </div>
  );
};

export default BeersListPage;
