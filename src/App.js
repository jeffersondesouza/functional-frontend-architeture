import React from "react";
import { Switch, Route } from "react-router-dom";

import { BeersListPage, BeerDetailsPage } from "./view/pages";
import { AppHeader } from "./view/components";

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <Switch>
        <Route exact path="/" component={BeersListPage} />
        <Route exact path="/beer/:id" component={BeerDetailsPage} />
      </Switch>
    </div>
  );
};

export default App;
