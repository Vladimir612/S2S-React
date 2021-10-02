import React, { useState, useEffect, useContext } from "react";
import database from "../database.json";

const TeamsContext = React.createContext();

export const useTeams = () => {
  return useContext(TeamsContext);
};

export const TeamsProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    setTeams(database.teams);
  }, []);
  return (
    <TeamsContext.Provider value={{ teams }}>{children}</TeamsContext.Provider>
  );
};
