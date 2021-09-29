import React, { useState, useEffect } from "react";
import "./Card.css";
import data from "../../data/data.json";

const Card = () => {
  const [dataPlayers, setDataPlayers] = useState([]);

  useEffect(() => {
    setDataPlayers(data.players);
  }, []);
  return (
    <div className="card-container">
      {dataPlayers.map((player) => {
        return (
          <div className="card" key={player.id}>
            <div
              className="card-image"
              style={{ backgroundImage: `url(${player.front_image})` }}
            ></div>
            <div className="card-text">
              <h2>{player.name}</h2>
              <span>Team: {player.team}</span>
              <p>{player.bio}</p>
              <span>Position: {player.position}</span>
            </div>
            <div className="card-stats">
              <div className="stat">
                <div className="value">{player.stat_ppg}</div>
                <div className="type">PPG</div>
              </div>
              <div className="stat border">
                <div className="value">{player.stat_rpg}</div>
                <div className="type">RPG</div>
              </div>
              <div className="stat">
                <div className="value">{player.stat_apg}</div>
                <div className="type">APG</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
