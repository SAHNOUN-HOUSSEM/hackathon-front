// Navbar.js

import React, { useState } from "react";
import Modal from "react-modal";
import PatientFormModal from "./PatientFormModal";
import MedicalRecordsModal from "./MedicalRecordsModal"; // Import the MedicalRecordsModal
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isPatientFormModalOpen, setPatientFormModalOpen] = useState(false);
  const [isMedicalRecordsModalOpen, setMedicalRecordsModalOpen] =
    useState(false);

  const openPatientFormModal = () => {
    setPatientFormModalOpen(true);
  };

  const closePatientFormModal = () => {
    setPatientFormModalOpen(false);
  };

  const openMedicalRecordsModal = () => {
    setMedicalRecordsModalOpen(true);
  };

  const closeMedicalRecordsModal = () => {
    setMedicalRecordsModalOpen(false);
  };

  return (
    <div className={styles["navbar"]}>
      <div className={styles["left-section"]}>
        <img src="/pictures/logo.jpg" alt="Logo" className={styles["logo"]} />
      </div>
      <div className={styles["center-section"]}>
        <input
          type="text"
          placeholder="Rechercher dossier médicale par code"
          className={styles["search-bar"]}
        />
      </div>
      <div className={styles["right-section"]}>
        <button
          className={styles["action-button"]}
          onClick={openPatientFormModal}
        >
          Ajouter fiche patient
        </button>
        <button
          className={styles["action-button"]}
          onClick={openMedicalRecordsModal}
        >
          Dossiers médicaux
        </button>
        <button className={styles["action-button"]}>
          Paramètres du compte
        </button>
      </div>

      {/* Modal for the patient form */}
      <Modal
        isOpen={isPatientFormModalOpen}
        onRequestClose={closePatientFormModal}
      >
        <PatientFormModal closeModal={closePatientFormModal} />
      </Modal>

      {/* Modal for medical records */}
      <Modal
        isOpen={isMedicalRecordsModalOpen}
        onRequestClose={closeMedicalRecordsModal}
      >
        <MedicalRecordsModal closeModal={closeMedicalRecordsModal} />
      </Modal>
    </div>
  );
};

export default Navbar;
