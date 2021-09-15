import React from "react";
import "./Card.css";

const Card = ({
  playerName,
  playerSurname,
  playerImage,
  playerTeam,
  playerDescription,
  playerRole,
  PPG,
  RPG,
  APG,
}) => {
  const playerClick = (e) => {
    e.preventDefault();
    window.location.href = `/players/${playerName}${playerSurname}`;
  };
  return (
    <div className="card" onClick={playerClick}>
      <div
        className="card-image"
        style={{ backgroundImage: `url(${playerImage})` }}
      ></div>
      <div className="card-text">
        <h2>
          {playerName} {playerSurname}
        </h2>
        <span>Team: {playerTeam}</span>
        <p>{playerDescription}</p>
        <span>Role: {playerRole}</span>
      </div>
      <div className="card-stats">
        <div className="stat">
          <div className="value">{PPG}</div>
          <div className="type">PPG</div>
        </div>
        <div className="stat border">
          <div className="value">{RPG}</div>
          <div className="type">RPG</div>
        </div>
        <div className="stat">
          <div className="value">{APG}</div>
          <div className="type">APG</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
