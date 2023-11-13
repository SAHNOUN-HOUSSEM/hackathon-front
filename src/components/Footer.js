import React from "react";
import { useLocation } from "react-router-dom";
const allowedRoutes = ["/signup", "/signin", "/"];

// Footer component
export const Footer = () => {
  const location = useLocation();
  const show = allowedRoutes.includes(location.pathname);

  return (
    <>
      {show && (
        <footer className="footer">
          <p>&copy; 2023 NOTRE SANTE. All rights reserved.</p>
        </footer>
      )}
    </>
  );
};
