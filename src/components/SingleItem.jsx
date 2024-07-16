import React from "react";

export default function SingleItem({ id, price, type }) {
  const urlImg = `/src/images/${type}.png`;
  return (
    <div>
      <img src={urlImg} alt="service" />
      <h2>Nombre :{type}</h2>
      <p>Precio : {price}</p>
    </div>
  );
}
