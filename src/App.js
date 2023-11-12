import React from "react";
import "./App.css";
import CenteredFrame from "./CenteredFrame";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="slogan-container">
        <p className="slogan">
          ░V░O░T░R░E░ ░S░A░N░T░E░ ░,░ ░N░O░T░R░E░ ░R░E░S░P░O░N░S░A░B░I░L░I░T░E░
        </p>
      </div>
      <div className="logo-container">
        <img src="./pictures/logo.png" alt="Logo du site" className="logo" />
      </div>
    </nav>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2023 NOTRE SANTE. All rights reserved.</p>
    </footer>
  );
};

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <CenteredFrame />
      <Footer />
    </div>
  );
};

export default App;
