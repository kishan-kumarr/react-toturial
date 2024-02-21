import React from "react";

const Card = ({ props }) => {
  const { image, name, story } = props;
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <h3>{image}</h3>
      <h3>{name}</h3>
      <h3>{story}</h3>
    </div>
  );
};

export default Card;
