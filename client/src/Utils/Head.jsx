import React from "react";
import Helmet from "react-helmet";

export const Head = ({ title, description }) => (
  <Helmet>
    <title>
      {title
        ? title
        : "Sabka Bazaar - Buy fresh Fruits, Vegetables, groceries and beauty products"}
    </title>
    <meta
      name="title"
      content={
        title
          ? title
          : "Sabka Bazaar - Buy fresh Fruits, Vegetables, groceries and beauty products"
      }
    />
    <meta
      name="description"
      content={
        description
          ? description
          : "Sabka Bazaar is here to provide you fresh Fruits, Vegetables, Groceries, Cosmetics, Baby Care products."
      }
    />

    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:url" content="http://sabkabazaar.com/" />
    <meta
      property="og:title"
      content={
        title
          ? title
          : "Sabka Bazaar - Buy fresh Fruits, Vegetables, groceries and beauty products."
      }
    />
    <meta
      property="og:description"
      content={
        description
          ? description
          : "Sabka Bazaar is here to provide you fresh Fruits, Vegetables, Groceries, Cosmetics, Baby Care products."
      }
    />
    <meta property="og:image" content="/static/images/logo_2x.png" />

    <meta
      property="twitter:card"
      content="Sabka Bazaar - Buy fresh Fruits, Vegetables, groceries and beauty products."
    />
    <meta property="twitter:url" content="http://sabkabazaar.com/" />
    <meta
      property="twitter:title"
      content="Sabka Bazaar - Buy fresh Fruits, Vegetables, groceries and beauty products."
    />
    <meta
      property="twitter:description"
      content={
        description
          ? description
          : "Sabka Bazaar is here to provide you fresh Fruits, Vegetables, Groceries, Cosmetics, Baby Care products."
      }
    />
    <meta property="twitter:image" content="/static/images/logo_2x.png" />
  </Helmet>
);
