import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/games/:game" component={Game} />
        <Route exact path="/players/:player" component={Player} />
        <Route exact path="/teams/:team" component={Team} /> */}
        <Route path="/404" component={Error} />
      </Switch>
    </>
  );
};

export default App;
