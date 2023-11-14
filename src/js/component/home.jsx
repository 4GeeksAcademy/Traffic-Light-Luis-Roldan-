import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Container } from "./Container";

export const Home = () => {
  return (
    <div>
      <Container />
    </div>
  );
};

// export default Home;

ReactDOM.render(<Home />, document.querySelector("#app"));
