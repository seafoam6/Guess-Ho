import React from "react";

interface Queen {
  name: string;
  age: number;
  city: string;
  photo: string;
}

const Card = ({ name, age, city, photo }: Queen) => {
  return (
    <div className="Card">
      <h2 className="name">{name}</h2>
      <div className="city">{city}</div>
      <div className="age">{age}</div>
      <img className="photo" src={`./assets/${photo}`} alt={name} />
    </div>
  );
};

export default Card;
