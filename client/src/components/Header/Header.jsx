import React from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";

import { Logo } from "components/Atoms/Logo/Logo";
import { Cart } from "components/Atoms/Cart/Cart";

export const Header = () => (
  <div className="header-container">
    <div className="left">
      <Logo>Sabka Bazaar</Logo>
      <nav role="navigation" aria-label="Primary menu">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    <div className="right">
      <nav role="navigation" aria-label="Secondary menu">
        <ul className="login-signup-nav">
          <li className="nav-item">
            <NavLink activeClassName="active" to="/signIn">
              SignIn
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/register">
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
      <Cart />
    </div>
  </div>
);
