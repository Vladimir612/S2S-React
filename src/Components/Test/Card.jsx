import React from "react";
import "./Card.css";

const Card = ({ cardImage, playerOrComponent }) => {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${cardImage})` }}
      ></div>
      {playerOrComponent}
    </div>
  );
};

export default Card;
