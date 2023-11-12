import React, { useState } from "react";
import "./CenteredFrame.css";

const CenteredFrame = () => {
  const [formData, setFormData] = useState({});
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setFormData({}); // Clear previous form data
    setActiveButton(buttonIndex);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Check if all required fields are filled
    const requiredFields = buttonData[activeButton].formFields.filter(
      (field) => field.required
    );
    const isValid = requiredFields.every((field) => formData[field.name]);

    if (!isValid) {
      alert("Please fill in all required fields.");
      return;
    }

    // Process the form data as needed
    console.log("Form submitted for button:", activeButton, formData);

    // Clear form data and active button
    setFormData({});
    setActiveButton(null);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleModalClose = () => {
    setActiveButton(null);
  };

  const buttonData = [
    {
      buttonText: "🧑🏻‍⚕️s'inscrire tant que médecin",
      formFields: [
        { name: "nom", label: "Nom", required: true },
        { name: "prenom", label: "Prénom", required: true },
        { name: "lieu", label: "Lieu", required: true },
        { name: "telephone", label: "Téléphone", required: true },
        { name: "carte d'identité", label: "carte d'identité", required: true },
        { name: "hopital", label: "Hôpital", required: true },
        { name: "email", label: "Email", type: "email" },
        {
          name: "motDePasse",
          label: "Mot de passe",
          type: "password",
          required: true,
        },
        {
          name: "disponible",
          label: "Disponible pour les compagnes volontaires",
          type: "checkbox",
        },
      ],
    },
    {
      buttonText: "⚕️s'inscrire tant que étudiant",
      formFields: [
        { name: "nom", label: "Nom", required: true },
        { name: "prenom", label: "Prénom", required: true },
        { name: "lieu", label: "Lieu", required: true },
        { name: "telephone", label: "Numéro de téléphone", required: true },
        { name: "carte d'identité", label: "carte d'identité", required: true },
        {
          name: "faculte",
          label: "Faculté",
          required: true,
        },
        { name: "email", label: "Email", type: "email" },
        {
          name: "motDePasse",
          label: "Mot de passe",
          type: "password",
          required: true,
        },
        {
          name: "disponible",
          label: "Disponible pour les compagnes volontaires",
          type: "checkbox",
          required: true,
        },
      ],
    },
    {
      buttonText: "🙍🏻 s'incrire tant que patient",
      formFields: [
        { name: "nom", label: "Nom", required: true },
        { name: "prenom", label: "Prénom", required: true },
        { name: "email", label: "Email", type: "email" },
        { name: "lieu", label: "Lieu", required: true },
        { name: "telephone", label: "Téléphone", required: true },
        {
          name: "motDePasse",
          label: "Mot de passe",
          type: "password",
          required: true,
        },
      ],
    },
    {
      buttonText: "se connecter",
      formFields: [
        { name: "nom", label: "Nom", required: true },
        { name: "prénom", label: "Prénom", required: true },
        { name: "email", label: "Email", type: "email" },
        {
          name: "motDePasse",
          label: "Mot de passe",
          type: "password",
          required: true,
        },
      ],
    },
  ];

  return (
    <div className="centered-frame">
      <div className="photo-half">
        <img src="./pictures/login.png" alt="Votre photo" />
      </div>
      <div className="empty-half">
        <h2>BIENVENU SUR NOTRE PLATEFORME </h2>
        <div className="button-container">
          {buttonData.map((button, index) => (
            <div key={index} className="d-grid gap-2">
              <button
                type="button"
                className={`btn btn-primary ${
                  activeButton === index ? "active" : ""
                }`}
                onClick={() => handleButtonClick(index)}
              >
                {button.buttonText}
              </button>
            </div>
          ))}
        </div>

        {activeButton !== null && (
          <div className="form-container">
            <form onSubmit={handleFormSubmit}>
              <p style={{ color: "red" }}>(*) champs obligatoires.</p>
              <p style={{ color: "green" }}>
                (*) veuillez donnez le maximum de détails.
              </p>
              {buttonData[activeButton].formFields.map((field, fieldIndex) => (
                <div key={fieldIndex} className="mb-3">
                  <label htmlFor={field.name} className="form-label">
                    {field.label}
                    {field.required && <span style={{ color: "red" }}>*</span>}
                    {field.name === "lieu" && (
                      <span style={{ color: "green" }}>
                        {" "}
                        (gouvernorat,Délégation,secteur)
                      </span>
                    )}
                  </label>
                  {field.type === "select" ? (
                    <select
                      id={field.name}
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      className="form-control"
                    >
                      {field.options.map((option, optionIndex) => (
                        <option key={optionIndex} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "checkbox" ? (
                    <input
                      type="checkbox"
                      id={field.name}
                      name={field.name}
                      checked={formData[field.name] || false}
                      onChange={handleChange}
                    />
                  ) : (
                    <input
                      type={field.type || "text"}
                      className="form-control"
                      id={field.name}
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                    />
                  )}
                </div>
              ))}
              <button type="submit" className="btn btn-primary">
                VALIDER
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-close"
                onClick={handleModalClose}
              >
                FERMER
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CenteredFrame;
