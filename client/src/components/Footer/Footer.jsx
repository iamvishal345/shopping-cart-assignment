import React from "react";
import "./styles.scss";

export const Footer = () => (
  <p className="main-footer">
    Copyright &copy; 2011-{new Date().getFullYear()} Sabka Bazaar Grocery
    Supplies Pvt Ltd
  </p>
);
