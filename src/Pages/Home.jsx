import React from "react";

//components
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Games from "../Components/Games/Games";
import CardsContainer from "../Components/CardsContainer/CardsContainer";
import { useTeams } from './../data/TeamsContext';
import { usePlayers } from './../data/PlayersContext';

const Home = () => {
  let {teams} =useTeams();
  let {players} =usePlayers();
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Games />
      <CardsContainer title="Players" data={players} />
      <CardsContainer title="Teams" data={teams} />
      <Footer />
    </div>
  );
};

export default Home;
