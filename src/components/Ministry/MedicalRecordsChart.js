// MedicalRecordsChart.js
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { getData } from "../../api/utilities";

const MedicalRecordsChart = () => {
  // State pour stocker les données du graphique
  const [chartData, setChartData] = useState({});

  // Récupérer les données des dossiers médicaux depuis le backend
  useEffect(() => {
    // Utilisez la fonction fetch ou une bibliothèque comme axios pour récupérer les données du backend
    // Exemple d'utilisation de fetch:
    getData("medicalRecord")
      .then((resp) => {
        // Traitement des données et mise à jour de l'état chartData
        // console.log(resp);
        setChartData(processData(resp.data));
      })
      .catch((error) =>
        console.error(
          "Erreur lors de la récupération des dossiers médicaux:",
          error
        )
      );
  }, []);

  // Fonction pour traiter les données récupérées en un format compréhensible par Chart.js
  const processData = (data) => {
    // Ajoutez votre logique de traitement des données ici
    // Exemple: Convertir les données au format attendu par Chart.js
    const labels = data.map((record) => record.date);
    const values = data.map((record) => record.value);

    // Retourner les données traitées
    return {
      labels,
      datasets: [
        {
          label: "Analyse des dossiers médicaux",
          data: values,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };
  };
  return (
    <div>
      <h2>Graphique d'analyse des dossiers médicaux</h2>
      <div>
        <Bar
          data={chartData}
          options={{
            maintainAspectRatio: false,
            scales: {
              x: { title: { display: true, text: "Date" } },
              y: { title: { display: true, text: "Valeur" } },
            },
          }}
        />
      </div>
    </div>
  );
};

export default MedicalRecordsChart;
