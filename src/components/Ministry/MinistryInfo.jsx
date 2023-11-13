import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Info.css";
import { getData } from "../../api/utilities";

const MinistryInfo = () => {
  const [ministryInfo, setMinistryInfo] = useState({});

  useEffect(() => {
    // Fetch ministry information from the backend
    getData("ministryOfHealth")
      .then((response) => setMinistryInfo(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="info-container">
      <h2>Ministry of Health Information</h2>
      <div className="info-item">
        <strong>Name:</strong> {ministryInfo.name || "N/A"}
        <br />
        <strong>Location:</strong> {ministryInfo.location || "N/A"}
        <br />
        <strong>Contact Number:</strong> {ministryInfo.contactNumber || "N/A"}
        <br />
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default MinistryInfo;
