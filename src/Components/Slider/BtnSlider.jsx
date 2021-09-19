import React from "react";
import "./Slider.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <div
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? (
        <FaArrowCircleRight size={40} color="#eecf9a" />
      ) : (
        <FaArrowCircleLeft size={40} color="#eecf9a" />
      )}
    </div>
  );
}
