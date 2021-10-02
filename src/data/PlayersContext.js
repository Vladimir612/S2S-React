import React, { useState, useEffect, useContext } from "react";
import database from "../database.json";

const PlayersContext = React.createContext();

export const usePlayers = () => {
  return useContext(PlayersContext);
};

export const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(database.players);
  }, []);
  return (
    <PlayersContext.Provider value={{ players }}>
      {children}
    </PlayersContext.Provider>
  );
};
