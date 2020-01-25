import React from "react";
import "./styles/card.css";

const Card: React.FC<any> = ({ name, age, city, photo }) => {
  return (
    <div
      className="card"
      onClick={e => console.log({ name, age, city, photo })}
    >
      <h2 className="name">{name}</h2>
      <div className="city">{city}</div>
      <div className="age">{age}</div>
      <img className="photo" src={`./assets/${photo}`} alt={name} />
    </div>
  );
};

export default Card;
