import React from "react";
import "./Card.css";

const Card = ({
  image,
  title,
  text,
  color,
  readNumber,
  viewNumber,
  commentNumber,
}) => {
  return (
    <div className="card-component">
      <div class="card">
        <div
          class="card-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div class="card-text">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div class="card-stats" style={{ background: `${color} ` }}>
          <div class="stat">
            <div class="value">{readNumber}</div>
            <div class="type">read</div>
          </div>
          <div class="stat border">
            <div class="value">{viewNumber}</div>
            <div class="type">views</div>
          </div>
          <div class="stat">
            <div class="value">{commentNumber}</div>
            <div class="type">comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
