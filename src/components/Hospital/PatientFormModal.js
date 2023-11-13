// PatientFormModal.js

import React from "react";
import styles from "./PatientFormModal.module.css"; // Import the external CSS file

const PatientFormModal = ({ closeModal }) => {
  return (
    <div className={styles["overlay"]}>
      <form>
        <label htmlFor="name">Nom:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="surname">Prénom:</label>
        <input type="text" id="surname" name="surname" />

        <label htmlFor="phone">Numéro de téléphone:</label>
        <input type="tel" id="phone" name="phone" />

        <label htmlFor="location">Gouvernorat:</label>
        <input type="text" id="governorate" name="location" />

        <label htmlFor="delegation">Délégation:</label>
        <input type="text" id="delegation" name="delegation" />

        <div className={styles["button-container"]}>
          <button type="button" onClick={closeModal}>
            Fermer
          </button>
          <button type="submit" id="submitBtn">
            Valider
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientFormModal;
