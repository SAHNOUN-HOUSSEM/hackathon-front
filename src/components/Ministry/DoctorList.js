import React, { useEffect, useState } from "react";
import axios from "axios";
import "./List.css";
import { getData } from "../../api/utilities";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctors from the backend
    getData("/doctors")
      .then((response) => {
        // console.log(response);
        setDoctors(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="list-container">
      <h2>Doctor List</h2>
      <ul className="custom-list">
        {doctors.map((doctor) => (
          <li key={doctor._id} className="list-item">
            <strong>Name:</strong> {doctor.firstName} {doctor.lastName}
            <br />
            <strong>Specialization:</strong> {doctor.specialization || "N/A"}
            <br />
            <strong>Contact Number:</strong> {doctor.contactNumber || "N/A"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
