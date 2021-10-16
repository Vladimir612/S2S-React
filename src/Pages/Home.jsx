import React, { useRef } from "react";

//components
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Games from "../Components/Games/Games";
import CardsContainer from "../Components/CardsContainer/CardsContainer";
import { useTeams } from "./../data/TeamsContext";
import { usePlayers } from "./../data/PlayersContext";

const Home = () => {
  let { teams } = useTeams();
  let { players } = usePlayers();

  const gamesSection = useRef();
  const playersSection = useRef();
  const teamsSection = useRef();
  const contactSection = useRef();

  return (
    <div className="Home">
      <Navbar
        sections={[gamesSection, playersSection, teamsSection, contactSection]}
      />
      <Hero toSection={gamesSection} />
      <Games section={gamesSection} />
      <CardsContainer title="Players" data={players} section={playersSection} />
      <CardsContainer title="Teams" data={teams} section={teamsSection} />
      <Footer section={contactSection} />
    </div>
  );
};

export default Home;
