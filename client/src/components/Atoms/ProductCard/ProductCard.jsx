import React from "react";
import "./styles.scss";

export const ProductCard = ({ product, handlePrimaryAction }) => {
  return (
    <div className="product-card">
      <h4 className="card-header">{product.name}</h4>
      <img
        loading="lazy"
        height="auto"
        width="100%"
        className="card-image"
        src={product.imageURL}
        alt={product.name}
      />
      <p title={product.description} className="card-body">
        {product.description}
      </p>
      <div className="card-footer">
        <h6>MRP Rs.{product.price}</h6>
        <button
          type="button"
          onClick={(e) => handlePrimaryAction(product)}
          className="btn"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};
