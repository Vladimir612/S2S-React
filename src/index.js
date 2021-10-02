import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { SinglePlayerProvider } from "./data/SinglePlayerContext";
import { SingleTeamProvider } from "./data/SingleTeamContext";
import { GamesProvider } from "./data/GamesContext";
import { TeamsProvider } from "./data/TeamsContext";
import { PlayersProvider } from "./data/PlayersContext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SinglePlayerProvider>
        <SingleTeamProvider>
          <GamesProvider>
            <TeamsProvider>
              <PlayersProvider>
                <App />
              </PlayersProvider>
            </TeamsProvider>
          </GamesProvider>
        </SingleTeamProvider>
      </SinglePlayerProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
