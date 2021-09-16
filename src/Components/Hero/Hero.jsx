import React from "react";
import "./Hero.css";
import bgImg from "../../assets/images/bg-basketball.png";
import playerImg from "../../assets/images/basketball-player.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="image-wrapper">
        <img src={bgImg} alt="Basketball Court" className="bg-image" />
      </div>
      <div className="banner">
        <h1>NBA info</h1>
        <p>Find out quickly every hot info from NBA</p>
        <button>
          <div className="arrows">
            <span className="arrow-1"></span>
            <span className="arrow-2"></span>
            <span className="arrow-3"></span>
          </div>
          <p>GAMES</p>
          <div className="arrows">
            <span className="arrow-1"></span>
            <span className="arrow-2"></span>
            <span className="arrow-3"></span>
          </div>
        </button>
      </div>
      <div className="front-image">
        <img src={playerImg} alt="Basketball Player" className="front-image" />
      </div>
    </div>
  );
};

export default Hero;