import React from "react";
import Hero from './../Components/Hero/Hero';
import Navbar from './../Components/Navbar/Navbar';

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      {/* <Slider />
      <Players />
      <Teams /> */}
    </div>
  );
};

export default Home;
