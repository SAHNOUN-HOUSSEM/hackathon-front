// Navbar.js
import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSpecialtyChange = (e) => {
    setSelectedSpecialty(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <div className="navbar">
      <div className="left-section">
        <img src="/pictures/logo.jpg" alt="Logo" className="logo" />
      </div>
      <div className="center-section">
        <input
          type="text"
          placeholder="Rechercher"
          value={searchInput}
          onChange={handleInputChange}
          className="search-bar"
        />
        <select value={selectedSpecialty} onChange={handleSpecialtyChange}>
          <option value="all">Spécialités</option>
          <option value="specialty1">Spécialité 1</option>
          <option value="specialty2">Spécialité 2</option>
          {/* Add more specialties as needed */}
        </select>
        <select value={selectedLocation} onChange={handleLocationChange}>
          <option value="all">Gouvernorats</option>
          <option value="location1">sfax</option>
          <option value="location2">tunis</option>
          <option value="location2">tozeur</option>
        </select>
      </div>
      <button className="action-button">Paramétres du compte</button>
    </div>
  );
};

export default Navbar;
