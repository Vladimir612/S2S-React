import React from "react";

//components
import Hero from "./../Components/Hero/Hero";
import Navbar from "./../Components/Navbar/Navbar";
import Footer from "./../Components/Footer/Footer";
import Players from "./../Components/Players/Players";
import Games from "../Components/Games/Games";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Games />
      <Players />
      {/* <Teams /> */}
      <Footer />
    </div>
  );
};

export default Home;
