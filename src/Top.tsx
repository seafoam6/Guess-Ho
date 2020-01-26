import React, { useState } from "react";
import { Queen } from "Models";
import "./styles/top.scss";
import classNames from "classnames";

const Top: React.FC<{ buttonClick: Function; selected: Queen }> = ({
  buttonClick,
  selected
}) => {
  const [isOpen, setStatus] = useState(false);

  const cn = classNames("rules", { open: isOpen });
  return (
    <header className="top">
      <h1>Guess Ho?</h1>
      <button
        className="rules-button"
        onClick={() => {
          console.log(isOpen);
          setStatus(!isOpen);
        }}
      >
        RULES
      </button>
      <div className={cn}>
        You and a hunty both open up this site on different devices. Don't let
        them peak. Take turns asking Yes/No questions to figure out who their
        secret queen is. Click a card to turn it over.{" "}
      </div>
      Your SECRET queen is <div className="name">{selected.name}</div>
      <div
        className="secret-box"
        style={{ backgroundImage: `url(./assets/${selected.photo})` }}
      />
      <button
        className="new-game"
        onClick={() => {
          buttonClick();
        }}
      >
        New Game
      </button>
    </header>
  );
};

export default Top;
