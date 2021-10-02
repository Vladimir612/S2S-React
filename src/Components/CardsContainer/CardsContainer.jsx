import React from "react";
import Card from "./../Card/Card";
import "./CardsContainer.css";

const CardsContainer = (props) => {
  return (
    <div className="cards-container">
      <div className="section-title">
        <h2>{props.title}</h2>
      </div>
      <div className="cards-wrapper">
        {props.data.map((item) => {
          return (
            <Card
              key={item.id}
              type={props.title === "Players" ? "player" : "team"}
              data={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardsContainer;
