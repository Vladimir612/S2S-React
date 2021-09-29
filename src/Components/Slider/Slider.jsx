import React, { useState, useEffect } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider.jsx";
import data from "../../data/data.json";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [dataGames, setDataGames] = useState([]);

  useEffect(() => {
    setDataGames(data.games);
  }, []);

  const nextSlide = () => {
    if (slideIndex !== dataGames.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataGames.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataGames.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="slider-wrapper">
      <div className="container-slider">
        {dataGames.map((game, index) => {
          return (
            <div
              key={game.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <img
                src={game.background_image}
                alt="Game Background"
                className="slider-bg-img"
              />
              <div className="game-data">
                <div className="left-column">
                  <div className="opponents-wrapper">
                    <div className="first-team">
                      <div className="team-img-wrapper">
                        <img
                          src={game.first_image}
                          alt={game.first_name}
                          className="first-team-image"
                        />
                      </div>
                      <h3 className="first-team-name">{game.first_name}</h3>
                    </div>
                    <div className="vs-image">
                      <div className="vs-wrapper">
                        <h2>VS</h2>
                      </div>
                    </div>
                    <div className="second-team">
                      <div className="team-img-wrapper">
                        <img
                          src={game.second_image}
                          alt={game.second_name}
                          className="second-team-image"
                        />
                      </div>
                      <h3 className="second-team-name">{game.second_name}</h3>
                    </div>
                  </div>
                  <div className="score-wrapper">
                    <h3 className="score">{game.score}</h3>
                  </div>
                </div>
                <div className="right-column">
                  <h2 className="game-info-title">GAME INFO</h2>
                  <p className="game-description">{game.description}</p>
                </div>
              </div>
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />

        <div className="container-dots">
          {dataGames.map((game, index) => (
            <div
              key={game.id}
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
