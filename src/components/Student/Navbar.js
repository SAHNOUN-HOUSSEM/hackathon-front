// Navbar.js
import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-section">
        <img src="/pictures/logo.jpg" alt="Logo" className="logo" />
      </div>
      <div className="center-section">
        <input
          type="text"
          placeholder="Rechercher compagnes volontaires"
          className="search-bar"
        />
      </div>
      <button className="action-button">Paramètres du compte</button>
    </div>
  );
};
export default Navbar;
