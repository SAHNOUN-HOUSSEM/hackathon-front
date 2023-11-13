import Navbar from "../components/Doctor/Navbar";
import "../components/Doctor/doctor.css";

export default function DoctorPage() {
  return (
    <div
      className="doctor-page"
      style={{ backgroundImage: "url(/pictures/medecin.png)" }}
    >
      <Navbar />

      {/* Large text input field at the center of the page */}
      <div className="text-input-container">
        {/* Date input */}
        <input type="date" className="input-field" placeholder="Date" />

        {/* Patient name input */}
        <input
          type="text"
          className="input-field"
          placeholder="Nom du patient"
        />

        {/* Additional details textarea */}
        <textarea
          className="large-text-input"
          placeholder="Écrivez ici librement..."
        />

        {/* Save button */}
        <button className="save-button">Enregistrer</button>
      </div>
    </div>
  );
}
