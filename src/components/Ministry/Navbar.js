import React from "react";
import "./Navbar.css";

const Navbar = ({ setActiveList }) => {
  return (
    <nav className="navbar">
      <button className="navbar-brand" onClick={() => setActiveList("")}>
        Admin Panel
      </button>
      <div className="nav-buttons">
        <button className="nav-button" onClick={() => setActiveList("doctors")}>
          Doctors
        </button>
        <button
          className="nav-button"
          onClick={() => setActiveList("institutions")}
        >
          Institutions
        </button>
        <button
          className="nav-button"
          onClick={() => setActiveList("medical-campaigns")}
        >
          Medical Campaigns
        </button>
        <button className="nav-button" onClick={() => setActiveList("chart")}>
          Medical Campaigns
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
