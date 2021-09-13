import React from "react";
import { Switch, Route } from "react-router-dom";
import "./assets/css/fonts.css";
import "./App.css";

//pages
import Home from "./Pages/Home";
import Game from "./Pages/Game";
import Player from "./Pages/Player";
import Team from "./Pages/Team";
import Error from "./Pages/Error";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/games/:game" component={Game} />
        <Route exact path="/players/:player" component={Player} />
        <Route exact path="/teams/:team" component={Team} />
        <Route path="/404" component={Error} />
      </Switch>
    </>
  );
};

export default App;
