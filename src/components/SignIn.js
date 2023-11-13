import React, { useState } from "react";
import "./CenteredFrame.css";
import { NavLink, useNavigate } from "react-router-dom";
import { postData } from "../api/utilities";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const loginDoctor = async (doctorData) => {
    const response = await postData("doctors/login", doctorData);
    console.log(response);
  };

  const loginStudent = async (studentData) => {
    const response = await postData("students/login", studentData);
    console.log(response);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Check if all required fields are filled
    const requiredFields = buttonData.formFields.filter(
      (field) => field.required
    );
    const isValid = requiredFields.every((field) => formData[field.name]);

    if (!isValid) {
      alert("Please fill in all required fields.");
      return;
    }
    const { role, email, motDePasse } = formData;
    console.log(role);
    console.log(role == 0);

    const loginData = { email, motDePasse };

    if (role == 0) {
      loginDoctor(loginData);
      navigate("/doctor");
    } else if (role == 1) {
      loginStudent(loginData);
      navigate("/student");
    } else if (role == 2) {
      // loginStudent(loginData);
      navigate("/patient");
    } else if (role == 3) {
      // loginStudent(loginData);
      navigate("/hospital");
    } else if (role == 4) {
      // loginStudent(loginData);
      navigate("/ministry");
    }
    // Clear form data and active button
    setFormData({});
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const buttonData = {
    buttonText: "se connecter",
    formFields: [
      { name: "email", label: "E-mail", type: "email" },
      {
        name: "motDePasse",
        label: "Mot de passe",
        type: "password",
        required: true,
      },
      {
        name: "role",
        label: "role",
        type: "select",
        options: ["Médecin", "Etudiant", "Patient", "Hopital", "Ministry"],
        required: true,
      },
    ],
  };

  return (
    <>
      <section className="centered-frame">
        <div className="photo-half">
          <img src="./pictures/login.png" alt=".." />
        </div>
        <div className="empty-half">
          <h2>SE CONNECTER</h2>

          <div className="form-container">
            <form onSubmit={handleFormSubmit}>
              <p style={{ color: "red" }}>(*) champs obligatoires.</p>
              <p style={{ color: "green" }}>
                (*) veuillez donnez le maximum de détails.
              </p>
              {buttonData.formFields.map((field, fieldIndex) => (
                <div key={fieldIndex} className="mb-3">
                  <label htmlFor={field.name} className="form-label">
                    {field.label}
                    {field.required && <span style={{ color: "red" }}>*</span>}
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
                      <option>selectionner le rôle</option>
                      {field.options.map((option, index) => (
                        <option key={index} value={index}>
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
              <button type="button" className="btn btn-secondary btn-close">
                ANNULER
              </button>
            </form>
          </div>
          <p>
            <NavLink
              to={"/signup"}
              className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              🧑🏻‍⚕️s'inscrire
            </NavLink>
          </p>
        </div>
      </section>
    </>
  );
};

export default SignIn;
