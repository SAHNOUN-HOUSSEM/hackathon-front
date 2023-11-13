import React, { useEffect, useState } from "react";
import { fetchData, getData, postData } from "../api/utilities";
import "./CenteredFrame.css";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [activeButton, setActiveButton] = useState(null);
  const [success, setSuccess] = useState(false);

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

    if (activeButton === 0) {
      const doctorData = {
        firstName: formData["prenom"],
        lastName: formData["nom"],
        cin: formData["carte d'identité"],
        email: formData["email"],
        contactNumber: formData["telephone"],
        specialization: formData["specialite"],
        healthInstitutionId: formData["hopital"],
        password: formData["motDePasse"],
      };
      registerDoctor(doctorData);
      navigate("/doctor");
    } else if (activeButton === 1) {
      navigate("/student");
    } else if (activeButton === 2) {
      navigate("/patient");
    } else if (activeButton === 3) {
      navigate("/hospital");
    }
    // else if (activeButton === 1) {
    //   navigate("/");
    // }

    setSuccess(true);
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

  const getAllHealthInstitutions = async () => {
    const response = await getData("healthInstitutions");
    return response;
  };
  const registerDoctor = async (doctorData) => {
    const response = await postData("doctors/register", doctorData);
    return response;
  };

  const [healthInstitutions, setHealthInstitutions] = useState([]);

  useEffect(() => {
    fetchData(getAllHealthInstitutions, setHealthInstitutions);
  }, []);

  const buttonData = [
    {
      buttonText: "🧑🏻‍⚕️s'inscrire tant que Médecin",
      formFields: [
        { name: "nom", label: "Nom", required: true },
        { name: "prenom", label: "Prénom", required: true },
        { name: "lieu", label: "Lieu", required: true },
        { name: "specialite", label: "specialite", required: true },
        { name: "telephone", label: "Téléphone", required: true },
        { name: "carte d'identité", label: "carte d'identité", required: true },
        {
          name: "hopital",
          label: "Hôpital",
          type: "select",
          options: healthInstitutions?.data?.map((healthInstitution) => ({
            name: healthInstitution.name,
            id: healthInstitution._id,
          })),
          required: true,
        },
        { name: "email", label: "E-mail", type: "email" },
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
      buttonText: "⚕️s'inscrire tant que Etudiant",
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
        { name: "email", label: "E-mail", type: "email" },
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
      buttonText: "🙍🏻 s'incrire tant que Patient",
      formFields: [
        { name: "nom", label: "Nom", required: true },
        { name: "prenom", label: "Prénom", required: true },
        { name: "email", label: "E-mail", type: "email" },
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
      buttonText: "🏥 s'incrire tant que Hopital",
      formFields: [
        {
          name: "Nom du responsable",
          label: "Nom du responsable",
          required: true,
        },
        {
          name: "Nom de l'établissemnet médicale",
          label: "Nom de l'établissemnet médicale",
          required: true,
        },
        {
          name: "e-mail de l'administration",
          label: "E-mail de l'administration",
          type: "email",
        },
        {
          name: "localisation",
          label: "Localisation (avec exactitude)",
          required: true,
        },
        { name: "telephone", label: "Téléphone", required: true },
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
    <>
      <section className="centered-frame">
        <div className="photo-half">
          <img src="./pictures/login.png" alt=".." />
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
                {buttonData[activeButton].formFields.map(
                  (field, fieldIndex) => (
                    <div key={fieldIndex} className="mb-3">
                      <label htmlFor={field.name} className="form-label">
                        {field.label}
                        {field.required && (
                          <span style={{ color: "red" }}>*</span>
                        )}
                        {field.name === "lieu" && (
                          <span style={{ color: "green" }}>
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
                          <option>selectionner l'Hôpital</option>
                          {field.options.map((option) => (
                            <option key={option.id} value={option.id}>
                              {option.name}
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
                  )
                )}
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
          <p>
            <NavLink
              to={"/signin"}
              className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              🧑🏻‍⚕️se connecter
            </NavLink>
          </p>
        </div>
      </section>
    </>
  );
};

export default SignUp;
