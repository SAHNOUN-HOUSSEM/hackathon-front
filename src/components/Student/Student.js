import React from "react";
import Modal from "react-modal";
import "./Student.css";
import Navbar from "./Navbar";

const CustomModal = ({ isOpen, handleClose, data }) => {
  if (!data) {
    // Handle the case where data is null
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        contentLabel="Example Modal"
      >
        <h2>CONFIRMATION DE PARTICIPATION</h2>
        <p>No data available</p>
        <button onClick={handleClose}>FERMER</button>
      </Modal>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Example Modal"
    >
      <h2>CONFIRMATION DE PARTICIPATION</h2>
      <div>
        <p>
          Pour confirmer votre présence à la compagne, copiez cette phrase dans
          l'email: shocroom@rns.tn avec un objet: participation.
        </p>
        <p>{`Je veux participer le ${data.date} à la compagne qui aura lieu à ${data.lieu}`}</p>
        <button onClick={handleClose}>FERMER</button>
      </div>
    </Modal>
  );
};

function Student() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [rowData, setRowData] = React.useState(null);

  const handleCheck = (data) => {
    setRowData(data);
    setIsModalOpen(true);
  };

  const closePopup = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="student"
      style={{
        backgroundImage: "url(/pictures/etudiant.png)",
      }}
    >
      <Navbar />

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Date de la compagne</th>
              <th>Lieu de la compagne</th>
              <th>contact pour plus d'informations</th>
              <th>Participer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12/12/2023</td>
              <td>TOZEUR</td>
              <td>55689741</td>
              <td>
                <button
                  onClick={() =>
                    handleCheck({ date: "12/12/2023", lieu: "TOZEUR" })
                  }
                >
                  &#10003;
                </button>
              </td>
            </tr>
            <tr>
              <td>1/1/2024</td>
              <td>jendouba</td>
              <td>22568974</td>
              <td>
                <button
                  onClick={() =>
                    handleCheck({ date: "1/1/2024", lieu: "jendouba" })
                  }
                >
                  &#10003;
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <CustomModal
        isOpen={isModalOpen}
        handleClose={closePopup}
        data={rowData}
      />
    </div>
  );
}

export default Student;
