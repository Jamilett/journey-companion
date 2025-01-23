import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Header.css";
import { LogoutProps } from "../interfaces/Login";
import { Button } from "@mui/material";

const Header: React.FC<LogoutProps> = ({ onLogout }) => {
  return (
    <header className="navbar">
      {/* Logo centrado */}
      <div className="logo">JoCo</div>

      {/* Menú de navegación alineado a la derecha */}
      <nav className="nav-links">
        <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
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
        <Button color="inherit" onClick={onLogout}> Logout </Button>
      </nav>
    </header>
  );
};

export default Header;
