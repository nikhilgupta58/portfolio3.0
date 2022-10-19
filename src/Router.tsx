import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        {/* <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route> */}
        <Route path={"*"}>
          <Redirect to={"/"} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
