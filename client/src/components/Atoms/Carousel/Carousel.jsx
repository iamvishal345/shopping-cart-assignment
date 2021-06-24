import React, { useState } from "react";
import "./styles.scss";
export const Carousel = ({ items }) => {
  const [curr, setCurr] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("called", curr);
  //     if (curr + 1 > items.length - 1) {
  //       setCurr(0);
  //     } else {
  //       setCurr(curr + 1);
  //     }
  //   }, 5000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [curr, items]);

  const handleClick = (i) => {
    if (curr + i > items.length - 1) {
      setCurr(0);
    } else if (curr + i < 0) {
      setCurr(items.length - 1);
    } else {
      setCurr(curr + i);
    }
  };
  return (
    <div className="car-container">
      <div className="banner">
        <img
          loading="lazy"
          height="auto"
          width="100%"
          src={process.env.PUBLIC_URL + items[curr].bannerImageUrl}
          alt={items[curr].bannerImageAlt}
        />
        <div className="overlay">
          <button
            id="prev-button"
            className="car-btn"
            onClick={(e) => handleClick(-1)}
          >
            PREV
          </button>
          <div className="current">
            {items.map((item, i) => (
              <div
                key={item.bannerImageUrl}
                className={`dot ${curr === i ? "active" : ""}`}
              ></div>
            ))}
          </div>
          <button
            id="next-button"
            className="car-btn"
            onClick={(e) => handleClick(1)}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};
