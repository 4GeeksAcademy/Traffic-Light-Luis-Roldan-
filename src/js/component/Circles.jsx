import React, { useState } from "react";
import reactDom from "react-dom";

export const Circles = (props) => {
  const [selectedCircle, setSelectedCircle] = useState(null);

  const handleCircleClick = (circleColor) => {
    if (circleColor === selectedCircle) {
      setSelectedCircle(null);
    } else {
      setSelectedCircle(circleColor);
    }
    props.onCircleClick && props.onCircleClick(circleColor);
  };

  return (
    <div className="Circles">
      <div
        className={`RedCircle ${selectedCircle === "red" ? "Selected" : ""}`}
        onClick={() => handleCircleClick("red")}
      ></div>
      <div
        className={`YellowCircle ${
          selectedCircle === "yellow" ? "Selected" : ""
        }`}
        onClick={() => handleCircleClick("yellow")}
      ></div>
      <div
        className={`GreenCircle ${
          selectedCircle === "green" ? "Selected" : ""
        }`}
        onClick={() => handleCircleClick("green")}
      ></div>
    </div>
  );
};
