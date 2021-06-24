import React, { useState } from "react";
export const CartContext = React.createContext({
  products: [],
  addToCart: () => {},
  updateQuantity: () => {},
});
export const CartContextProvider = (props) => {
  const [productsList, setProductsList] = useState([]);
  const addToCart = (product) => {
    setProductsList((currentProductList) => {
      const alreadyInCart = currentProductList.findIndex(
        (p) => p.id === product.id
      );
      if (alreadyInCart > -1) {
        currentProductList[alreadyInCart].quantity += 1;
        return [...currentProductList];
      } else {
        return [...currentProductList, { ...product, quantity: 1 }];
      }
    });
  };
  const updateQuantity = (product, action) => {
    let currentProductList = [...productsList];
    currentProductList.find((prod) => prod.id === product.id).quantity +=
      action;
    setProductsList([...currentProductList.filter((p) => p.quantity > 0)]);
  };
  return (
    <CartContext.Provider
      value={{
        products: productsList,
        addToCart: addToCart,
        updateQuantity: updateQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
