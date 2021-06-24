import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Card } from "components/Atoms/Card/Card";
import { Carousel } from "components/Atoms/Carousel/Carousel";
import { Head } from "Utils/Head";

const Home = () => {
  const [offers, setOffers] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/api/banners")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setOffers(res);
      })
      .catch((err) => {
        console.error(err);
      });
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
  }, []);
  return (
    <React.Fragment>
      <Head
        title="Sabka Bazaar - Offers and Categories"
        description="Explore various categories of Products offered. Flat discounts on daily need and groceries "
      />
      <div className="home-container">
        {offers.length > 0 && (
          <Carousel items={offers.sort((a, b) => a.order - b.order)} />
        )}
        {categories.length > 0 &&
          categories
            .sort((a, b) => a.order - b.order)
            .map((cat) => <Card key={cat.order} item={cat} />)}
      </div>
    </React.Fragment>
  );
};

export default Home;
