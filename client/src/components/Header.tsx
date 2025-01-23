import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="navbar">
      {/* Logo centrado */}
      <div className="logo">JoCo</div>

      {/* Menú de navegación alineado a la derecha */}
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Services
        </NavLink>
        <NavLink
          to="/activities"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Activities
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
