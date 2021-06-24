import React, { useContext, useEffect, useRef, useState } from "react";
import "./styles.scss";
import { Sidebar } from "components/Atoms/Sidebar/Sidebar";
import { ProductCard } from "components/Atoms/ProductCard/ProductCard";
import { CartContext } from "context/CartContext";
import { Head } from "Utils/Head";

const Products = () => {
  const products = useRef();
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const addToCart = useContext(CartContext).addToCart;
  useEffect(() => {
    fetch("/api/categories")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.error(err);
      });
    fetch("/api/products")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        products.current = res;
        setFilteredProducts(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleBuyNow = (product) => {
    addToCart(product);
  };
  const selectedCallback = (menuId) => {
    if (menuId === "all") setFilteredProducts([...products.current]);
    else
      setFilteredProducts([
        ...products.current.filter((prod) => prod.category === menuId),
      ]);
  };
  return (
    <React.Fragment>
      <Head
        title="Sabka Bazaar - Available Products"
        description="Fresh fruits and vegetables and genuine cosmetics and Baby care products"
      />
      <div className="products-container">
        {categories.length > 0 && (
          <Sidebar
            menuList={categories.sort((a, b) => a.order - b.order)}
            selectedCallback={selectedCallback}
          />
        )}
        <div className="products-list">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handlePrimaryAction={handleBuyNow}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
