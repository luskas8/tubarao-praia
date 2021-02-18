import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Sushi } from "./pages/Sushi";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sushi" component={Sushi} />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
