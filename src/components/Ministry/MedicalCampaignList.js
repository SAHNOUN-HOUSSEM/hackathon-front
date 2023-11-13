import React, { useEffect, useState } from "react";
import axios from "axios";
import "./List.css";
import { getData } from "../../api/utilities";

const MedicalCampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Fetch medical campaigns from the backend
    getData("medicalCampaign")
      .then((response) => {
        // console.log(response.data);
        setCampaigns(response.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="list-container">
      <h2>Medical Campaigns</h2>
      {campaigns.map((campaign) => (
        <div key={campaign._id} className="list-item">
          <strong>Title:</strong> {campaign.title || "N/A"}
          <br />
          <strong>Description:</strong> {campaign.description || "N/A"}
          <br />
          <strong>Start Date:</strong> {campaign.startDate || "N/A"}
          <br />
          <strong>End Date:</strong> {campaign.endDate || "N/A"}
          <br />
          <h4>Participating Doctors:</h4>
          <ul>
            {campaign.doctors.map((doctor) => (
              <li key={doctor._id}>
                {doctor.firstName} {doctor.lastName} -{" "}
                {doctor.specialization || "N/A"}
              </li>
            ))}
          </ul>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default MedicalCampaignList;
