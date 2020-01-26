import React from "react";
import "./styles/card.scss";
import classnames from "classnames";

const Card: React.FC<{
  name: string;
  age: number;
  city: string;
  photo: string;
  active: boolean;
  handleClick: Function;
}> = ({ name, age, city, photo, active, handleClick }) => {
  const cnames = classnames("card", {
    active: active
  });

  return (
    <div className="wrapper">
      <div
        className={cnames}
        onClick={() => {
          handleClick();
        }}
      >
        <div className="face back">
          <h2> GUESS HO ? </h2>
        </div>
        <div className="face front">
          <header>
            <h2 className="name">{name}</h2>
          </header>
          <img className="photo" src={`./assets/${photo}`} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default Card;
