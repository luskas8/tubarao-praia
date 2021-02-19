import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Sushi } from "./pages/Sushi";
import { Acai } from "./pages/Acai";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sushi" component={Sushi} />
        <Route path="/acai" component={Acai} />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
