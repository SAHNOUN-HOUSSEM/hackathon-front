import React, { useEffect, useState } from "react";
import "./List.css";
import { getData } from "../../api/utilities";

const InstitutionList = () => {
  const [institutions, setInstitutions] = useState([]);

  useEffect(() => {
    // Fetch institutions from the backend
    getData("healthInstitutions")
      .then((response) => {
        // console.log(response);
        setInstitutions(response.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="list-container">
      <h2>Institution List</h2>
      <ul className="custom-list">
        {institutions.map((institution) => (
          <li key={institution._id} className="list-item">
            <strong>Name:</strong> {institution.name}
            <br />
            <strong>Type:</strong> {institution.type || "N/A"}
            <br />
            <strong>Location:</strong> {institution.location || "N/A"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstitutionList;
