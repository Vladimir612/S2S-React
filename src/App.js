import React from "react";
import { Switch, Route } from "react-router-dom";
import "./assets/css/fonts.css";
import "./App.css";
import Error from "./Pages/Error";
import RoutePage from "./Pages/RoutePage/RoutePage";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/players/:player" component={RoutePage} />
        <Route exact path="/teams/:team" component={RoutePage} />
        <Route path="/404" component={Error} />
      </Switch>
    </>
  );
}

export default App;
