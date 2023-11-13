import React from "react";
import { useLocation } from "react-router-dom";
const allowedRoutes = ["/signup", "/signin", "/"];

export const Navbar = () => {
  const location = useLocation();

  const show = allowedRoutes.includes(location.pathname);
  return (
    <>
      {show && (
        <nav className="navbar">
          <div className="slogan-container">
            <p className="slogan">
              ░V░O░T░R░E░ ░S░A░N░T░E░ ░,░ ░N░O░T░R░E░
              ░R░E░S░P░O░N░S░A░B░I░L░I░T░E░
            </p>
          </div>
          <div className="logo-container">
            <img
              src="./pictures/logo.png"
              alt="Logo du site"
              className="logo"
            />
          </div>
        </nav>
      )}
    </>
  );
};
