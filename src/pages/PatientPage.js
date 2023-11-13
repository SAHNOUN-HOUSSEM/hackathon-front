import Navbar from "../components/Patient/Navbar";
import "../components/Patient/Patient.css";

export default function PatientPage() {
  const tableData = [
    [
      "Hôpital Razi",
      "La Manouba",
      "Rue des orangers",
      "71600037",
      "71600339",
      "irm/scanner",
      "disponible",
      "neuropsychiatrie",
    ],
    [
      "مستوصف حي الخضراء",
      "Tunis",
      "Rue Omran Elfessi",
      "74526987",
      "78528686",
      "scanner",
      "disponible",
      "généraliste",
    ],
  ];

  return (
    <div
      className="patient-page"
      style={{ backgroundImage: "url(/pictures/bg.png)" }}
    >
      <Navbar />
      <div className="center-table">
        <table>
          <tbody>
            <tr>
              <td>Nom de l'établissement de santé</td>
              <td>Gouvernorat </td>
              <td>Lieu</td>
              <td>Contact</td>
              <td>Urgence</td>
              <td>Matériel disponibles</td>
              <td>Ambulance</td>
              <td>Spécialités des médecins disponibles</td>
            </tr>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((data, columnIndex) => (
                  <td key={columnIndex}>{data}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
