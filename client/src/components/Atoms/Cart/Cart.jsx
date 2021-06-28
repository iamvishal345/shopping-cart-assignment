import React, { useContext, useState } from "react";
import "./styles.scss";
import { ReactComponent as CartIcon } from "assets/cart.svg";
import { CartContext } from "context/CartContext";

export const Cart = () => {
  const productList = useContext(CartContext).products;
  const updateQuantity = useContext(CartContext).updateQuantity;
  const [showDropdown, setShowDropdown] = useState(false);
  const handleShowDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="cart-container">
      <div
        tabIndex={0}
        role="button"
        className="cart-icon"
        aria-label={showDropdown ? "Hide Cart Dropdown" : "Show Cart Dropdown"}
        onClick={handleShowDropdown}
        onKeyUp={(e) => e.code === "Enter" && handleShowDropdown(e)}
      >
        <CartIcon />
        <span id="no-of-items">{productList.length} items</span>
      </div>
      {showDropdown && (
        <React.Fragment>
          <div className="overlay"></div>
          <div className="cart-dropdown">
            <div className="cart-header">
              <span>
                <b>My Cart</b>
                {productList.length > 0 && <>({productList.length} item)</>}
              </span>
              <button
                onClick={handleShowDropdown}
                className="cart-close-btn"
                value="close"
              >
                X
              </button>
            </div>
            <div className="cart-body">
              {productList.length === 0 && (
                <div className="cart-empty">
                  <b>No items in your cart</b>
                  <p>Your favorite items are just a click away</p>
                </div>
              )}

              {productList.length > 0 && (
                <div className="cart-with-products">
                  <div className="products-wrapper">
                    {
                      <>
                        {productList.map((product, i) => (
                          <div key={product.id} className="cart-product-card">
                            <div className="image">
                              <img
                                loading="lazy"
                                height="70"
                                src={product.imageURL}
                                alt={product.name}
                              />
                            </div>
                            <div className="details">
                              <h5>{product.name}</h5>
                              <div className="actions-container">
                                <button
                                  id={`dec-btn-${i}`}
                                  type="button"
                                  className="btn"
                                  onClick={() => updateQuantity(product, -1)}
                                >
                                  -
                                </button>
                                <b>{product.quantity}</b>
                                <button
                                  id={`inc-btn-${i}`}
                                  type="button"
                                  className="btn"
                                  onClick={() => updateQuantity(product, 1)}
                                >
                                  +
                                </button>
                                <span>X</span>
                                <span>Rs.{product.price}</span>
                              </div>
                            </div>
                            <div className="final-price">
                              Rs.{product.price * product.quantity}
                            </div>
                          </div>
                        ))}
                        <div className="bottom-card">
                          <img
                            height="30"
                            src="/static/images/lowest-price.png"
                            alt="Lowest Price Guaranteed"
                          />
                          <p>You won't find it cheaper anywhere</p>
                        </div>
                      </>
                    }
                  </div>
                  <p>Promo code can be applied on payment page</p>
                </div>
              )}

              <button
                id="checkout-button"
                onClick={handleShowDropdown}
                className={`btn ${productList.length > 0 ? "checkout" : ""}`}
              >
                {productList.length > 0 ? (
                  <>
                    <span>Proceed to Checkout</span>
                    <span>
                      Rs.
                      {productList.reduce(
                        (acc, curr) => acc + curr.quantity * curr.price,
                        0
                      )}
                      <span className="arrow">{">"}</span>
                    </span>
                  </>
                ) : (
                  "Start Shopping"
                )}
              </button>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
