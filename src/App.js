import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Pack from "./Pack";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pack/:id">
        <Pack />
      </Route>
    </Switch>
  );
}

export default App;
