import React from "react";
import "./style.scss";

export const Logo = () => (
  // <div className="logo-container">
  //   <div className="box one"></div>
  //   <div className="box two"></div>
  //   <div className="box three"></div>
  //   <span className="brand">
  //     SABKA <br /> BAZAAR
  //   </span>
  // </div>
  <picture>
    <source srcSet="/static/images/logo.png" media="(max-width: 767.98px)" />
    <img
      className="logo-image"
      height="50"
      src="/static/images/logo_2x.png"
      alt="Sabka Bazaar"
    />
  </picture>
);
