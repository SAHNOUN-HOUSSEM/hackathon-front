/* MedicalRecordsModal.js */

import React, { useState } from "react";
import "./MedicalRecordsModal.css"; // Import the external CSS file

const MedicalRecordsModal = ({ closeModal }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all"); // "all", or "patient"

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  // Dummy data for the table
  const medicalRecordsData = [
    { patient: "John Doe", code: "MD123" },
    { patient: "Jane Doe", code: "MD456" },
    // Add more data as needed
  ];

  // Filter and search logic
  const filteredData = medicalRecordsData.filter((record) => {
    if (selectedFilter === "all" || selectedFilter === "patient") {
      return record.patient.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });
  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-header">
          <button className="close-button" onClick={closeModal}>
            ×
          </button>
        </div>

        {/* Filter dropdown */}
        <label htmlFor="filter">Filtrer par </label>
        <select
          id="filter"
          value={selectedFilter}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value="all">Tous</option>
          <option value="patient">Patient</option>
        </select>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Recherche..."
          value={searchTerm}
          onChange={handleSearchChange}
        />

        {/* Table */}
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Code Dossier Médical</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((record, index) => (
              <tr key={index}>
                <td>{record.patient}</td>
                <td>{record.code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicalRecordsModal;
