import React from "react";

import Card from "../Card/Card";
import "../Card/Card.css";
const imageURL =
  "https://www.ocregister.com/wp-content/uploads/2021/05/imageedit_1_7474432946.jpg";

const Players = () => {
  return (
    <div className="players">
      <div className="card-container">
        <Card
          playerName="Lebron"
          playerSurname="James"
          playerImage={imageURL}
          playerTeam="Los Angeles Lakers"
          playerDescription="King James, is widely considered one of the greatest all-around players of all time."
          playerRole="FG"
          PPG="26.6"
          RPG="10.2"
          APG="8.9"
        />
        <Card
          playerName="Lebron"
          playerSurname="James"
          playerImage={imageURL}
          playerTeam="Los Angeles Lakers"
          playerDescription="King James, is widely considered one of the greatest all-around players of all time."
          playerRole="FG"
          PPG="26.6"
          RPG="10.2"
          APG="8.9"
        />
        <Card
          playerName="Lebron"
          playerSurname="James"
          playerImage={imageURL}
          playerTeam="Los Angeles Lakers"
          playerDescription="King James, is widely considered one of the greatest all-around players of all time."
          playerRole="FG"
          PPG="26.6"
          RPG="10.2"
          APG="8.9"
        />
      </div>
    </div>
  );
};

export default Players;
