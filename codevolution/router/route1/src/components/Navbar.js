import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "none",
      textDecoration: isActive ? "none" : " underline",
    };
  };
  return (
    <nav className="nav-bar">
      <div className="nav-text">
        <NavLink to="/" style={navLinkStyle}>
          Home
        </NavLink>
      </div>
      <div className="nav-text">
        <NavLink to="/about" style={navLinkStyle}>
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
