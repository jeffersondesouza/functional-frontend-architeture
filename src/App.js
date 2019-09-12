import React from "react";
import { Switch, Route } from "react-router-dom";

import "./styles/main.scss";
import { BeersListPage, BeerDetailsPage } from "./view/pages";
import { AppHeaderContainer } from "./view/containers";

const App = () => {
  return (
    <div className="App">
      <AppHeaderContainer />
      <Switch>
        <Route exact path="/" component={BeersListPage} />
        <Route exact path="/cervejas/:id" component={BeerDetailsPage} />
      </Switch>
    </div>
  );
};

export default App;
