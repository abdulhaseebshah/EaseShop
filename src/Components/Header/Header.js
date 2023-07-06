import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <NavLink to="/">
          <h2>EaseShop</h2>
        </NavLink>
      </div>
      <ul className="navLinks">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/ProductList">All Products</NavLink>
        </li>
      </ul>
      <ul className="right-navLinks">
        <li>
          <NavLink to="/CartList" className="cart__bag">
            <span className="goto_cart"> Go To Cart</span>
            <span className="badge">1</span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="">{userIcon}</NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default Header;
