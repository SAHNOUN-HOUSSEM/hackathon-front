import React, { useState } from "react";
import Navbar from "../components/Ministry/Navbar";
import DoctorList from "../components/Ministry/DoctorList";
import InstitutionList from "../components/Ministry/InstitutionList";
import MedicalCampaignList from "../components/Ministry/MedicalCampaignList";

import "../components/Ministry/ministry.css";
import MinistryInfo from "../components/Ministry/MinistryInfo";
import MedicalRecordsChart from "../components/Ministry/MedicalRecordsChart";

const AdminPage = () => {
  const [activeList, setActiveList] = useState("");

  return (
    <div className="ministry-page">
      <Navbar setActiveList={setActiveList} />
      {activeList === "" && <MinistryInfo />}
      {activeList === "doctors" && <DoctorList />}
      {activeList === "institutions" && <InstitutionList />}
      {activeList === "medical-campaigns" && <MedicalCampaignList />}
      {activeList === "chart" && <MedicalRecordsChart />}
    </div>
  );
};

export default AdminPage;
