/* MedicalRecordsModal.js */

import React, { useState } from "react";
import styles from "./MedicalRecordsModal.module.css"; // Import the external CSS file

const MedicalRecordsModal = ({ closeModal }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all"); // "all", "doctor", or "patient"

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  // Dummy data for the table
  const medicalRecordsData = [
    { doctor: "Dr. Smith", patient: "John Doe", code: "MD123" },
    { doctor: "Dr. Johnson", patient: "Jane Doe", code: "MD456" },
    // Add more data as needed
  ];

  // Filter and search logic
  const filteredData = medicalRecordsData.filter((record) => {
    if (selectedFilter === "all" || selectedFilter === "doctor") {
      return record.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (selectedFilter === "patient") {
      return record.patient.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });

  return (
    <div className={styles["overlay"]}>
      <div className={styles["modal"]}>
        <div className={styles["modal-header"]}>
          <button className={styles["close-button"]} onClick={closeModal}>
            ×
          </button>
        </div>

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
              <th>Docteur</th>
              <th>Patient</th>
              <th>Code Dossier Médical </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((record, index) => (
              <tr key={index}>
                <td>{record.doctor}</td>
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
