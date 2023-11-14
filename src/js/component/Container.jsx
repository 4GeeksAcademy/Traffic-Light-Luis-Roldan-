import React from "react";
import reactDom from "react-dom";
import { Circles } from "./Circles";

export const Container = () => {
  return (
    <div>
      <div className="TopPart"></div>
      <div className="MainContainer">
        <Circles
        />
      </div>
    </div>
  );
};
