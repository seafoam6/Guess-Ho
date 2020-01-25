import React from "react";
import { Queen } from "Models";
import "./styles/top.scss";

const Top: React.FC<{ buttonClick: Function; selected: Queen }> = ({
  buttonClick,
  selected
}) => (
  <header className="top">
    <h1>Guess Ho?</h1>
    Your SECRET queen is: {selected.name}
    <div
      className="secret-box"
      style={{ backgroundImage: `url(./assets/${selected.photo})` }}
    />
    <button
      onClick={() => {
        console.log("click");
        buttonClick();
      }}
    >
      New Game
    </button>
  </header>
);

export default Top;
