import React, { useState, useEffect, useContext } from "react";
import database from "../database.json";

const GamesContext = React.createContext();

export const useGames = () => {
  return useContext(GamesContext);
};

export const GamesProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames(database.games);
  }, []);

  return (
    <GamesContext.Provider value={{ games }}>{children}</GamesContext.Provider>
  );
};
