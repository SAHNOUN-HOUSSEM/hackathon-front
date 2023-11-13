// Navbar.js
import React, { useState } from "react";
import Modal from "react-modal";
import "./Navbar.css";
import MedicalRecordsModal from "./MedicalRecordsModal";
import MedicalCampaignsModal from "./MedicalCampaignsModal";

// Navbar component definition
const Navbar = () => {
  // State to control the visibility of the medical records modal
  const [isMedicalRecordsModalOpen, setMedicalRecordsModalOpen] =
    useState(false);

  // State to control the visibility of the medical campaigns modal
  const [isMedicalCampaignsModalOpen, setMedicalCampaignsModalOpen] =
    useState(false);

  // Function to open the medical records modal
  const openMedicalRecordsModal = () => {
    setMedicalRecordsModalOpen(true);
  };

  // Function to open the medical campaigns modal
  const openMedicalCampaignsModal = () => {
    setMedicalCampaignsModalOpen(true);
  };

  // Function to close the medical records modal
  const closeMedicalRecordsModal = () => {
    setMedicalRecordsModalOpen(false);
  };

  // Function to close the medical campaigns modal
  const closeMedicalCampaignsModal = () => {
    setMedicalCampaignsModalOpen(false);
  };

  // JSX structure for the Navbar component
  return (
    <div className="navbar">
      {/* Left section with the logo */}
      <div className="left-section">
        <img src="/pictures/logo.jpg" alt="Logo" className="logo" />
      </div>

      {/* Center section with the search bar */}
      <div className="center-section">
        <input
          type="text"
          placeholder="Rechercher dossier médical par code"
          className="search-bar"
        />
      </div>

      {/* Right section with action buttons */}
      <div className="right-section">
        {/* Button to view available campaigns */}
        <button className="action-button" onClick={openMedicalCampaignsModal}>
          Voir les compagnes disponibles
        </button>

        {/* Button to open medical records modal */}
        <button className="action-button" onClick={openMedicalRecordsModal}>
          Dossiers médicaux
        </button>

        {/* Button for account settings */}
        <button className="action-button">Paramètres du compte</button>
      </div>

      {/* Modal for displaying medical records */}
      <Modal
        isOpen={isMedicalRecordsModalOpen}
        onRequestClose={closeMedicalRecordsModal}
      >
        <MedicalRecordsModal closeModal={closeMedicalRecordsModal} />
      </Modal>

      {/* Modal for displaying medical campaigns */}
      <Modal
        isOpen={isMedicalCampaignsModalOpen}
        onRequestClose={closeMedicalCampaignsModal}
      >
        <MedicalCampaignsModal closeModal={closeMedicalCampaignsModal} />
      </Modal>
    </div>
  );
};

export default Navbar;
