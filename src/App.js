import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HospitalPage from "./pages/HospitalPage";
import StudentPage from "./pages/StudentPage";
import PatientPage from "./pages/PatientPage";
import DoctorPage from "./pages/DoctorPage";
import MinistryOfHealthPage from "./pages/MinistryPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/hospital" element={<HospitalPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/ministry" element={<MinistryOfHealthPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
