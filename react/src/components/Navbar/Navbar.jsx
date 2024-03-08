/* eslint-disable react/prop-types */

import { useState } from "react";

import { FaBars } from "react-icons/fa";

import "./Navbar.css";

export default function Navbar({ theme, setTheme }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <div className="colornavbar">
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="">
            <h1>mcr</h1>
          </a>
        </div>
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <FaBars />
        </div>
        <nav
          className={`navbar-topic ${showMenu ? "show-menu" : ""}`}
          onClick={handleLinkClick}
        >
          <a href="#about">À Propos</a>
          <a href="#experience">Expérience</a>
          <a href="#">Compétences</a>
          <a href="#">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="navbar-right">
          {theme === "dark" ? (
            <input
              onClick={handleClick}
              id="toggle"
              className="toggle"
              type="checkbox"
              checked
            />
          ) : (
            <input
              onClick={handleClick}
              id="toggle"
              className="toggle"
              type="checkbox"
            />
          )}
        </div>
      </nav>
    </div>
  );
}
