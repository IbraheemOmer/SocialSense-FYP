import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`content ${isActive ? "active" : ""}`}>
        <NavLink
          to="/products"
          className={location.pathname === "/products" ? "active" : ""}
        >
          Products
        </NavLink>
        <NavLink
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          About Us
        </NavLink>
        <NavLink
          to="/research"
          className={location.pathname === "/research" ? "active" : ""}
        >
          Research
        </NavLink>
        <NavLink
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact Us
        </NavLink>
      </ul>
    </nav>
  );
}
