import React from "react";
import reactDom from "react-dom";
import { Circle } from "./Circles";

export const Container = () => {
  return (
    <div>
      <div className="TopPart"></div>
      <div className="MainContainer">
        <Circle />
      </div>
    </div>
  );
};
