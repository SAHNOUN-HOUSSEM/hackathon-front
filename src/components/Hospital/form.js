// Form.js
import React, { useState } from "react";
import styles from "./form.module.css";

const Form = () => {
  const [deviceName, setDeviceName] = useState("");
  const [selectedOption, setSelectedOption] = useState("option1");
  const [ambulanceInService, setAmbulanceInService] = useState("");
  const [ambulanceOutOfService, setAmbulanceOutOfService] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [doctorSpecialty, setDoctorSpecialty] = useState("");

  const handleDeviceNameChange = (e) => {
    setDeviceName(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleAmbulanceInServiceChange = (e) => {
    setAmbulanceInService(e.target.value);
  };

  const handleAmbulanceOutOfServiceChange = (e) => {
    setAmbulanceOutOfService(e.target.value);
  };

  const handleDoctorNameChange = (e) => {
    setDoctorName(e.target.value);
  };

  const handleDoctorSpecialtyChange = (e) => {
    setDoctorSpecialty(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez traiter les données du formulaire ici, par exemple, les envoyer à un backend
    console.log("Données soumises :", {
      deviceName,
      selectedOption,
      ambulanceInService,
      ambulanceOutOfService,
      doctorName,
      doctorSpecialty,
    });
  };

  return (
    <form
      className={styles["custom-form"]}
      onSubmit={handleSubmit}
      style={{ marginLeft: "40px" }}
    >
      <label>
        Nom de l'appareil:
        <input
          type="text"
          value={deviceName}
          onChange={handleDeviceNameChange}
        />
      </label>
      <label>
        Choix d'options :
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="option1">en marche</option>
          <option value="option2">en panne</option>
        </select>
      </label>
      <button type="submit">Soumettre</button>
      <br />
      <label>
        Nombre d'ambulance (disponible) en marche:
        <input
          type="text"
          value={ambulanceInService}
          onChange={handleAmbulanceInServiceChange}
        />
      </label>
      <label>
        Nombre d'ambulance en panne:
        <input
          type="text"
          value={ambulanceOutOfService}
          onChange={handleAmbulanceOutOfServiceChange}
        />
      </label>
      <button type="submit">Soumettre</button>
      <br />
      <label>
        Nom du docteur:
        <input
          type="text"
          value={doctorName}
          onChange={handleDoctorNameChange}
        />
      </label>
      <label>
        Spécialité du docteur:
        <input
          type="text"
          value={doctorSpecialty}
          onChange={handleDoctorSpecialtyChange}
        />
      </label>
      <button type="submit">Soumettre</button>
    </form>
  );
};

export default Form;
