import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export const Card = ({ item }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          loading="lazy"
          width="100%"
          height="auto"
          src={item.imageUrl}
          alt={item.name}
        />
      </div>
      <div className="details-container">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <Link to="/products" className="btn">
          Explore {item.key}
        </Link>
      </div>
    </div>
  );
};
