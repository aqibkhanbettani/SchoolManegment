import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/assets/logo.webp";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm px-4 fixed-top"
      style={{ backgroundColor: "black" }}
    >
      <div className="container-fluid">
        {/* Left Side Logo */}
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          style={{ color: "white" }}
        >
          <img
            src={logo}
            alt="School Logo"
            width="40"
            height="40"
            className="me-2 rounded-circle"
          />
          <span className="fw-bold">School Management</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right Side Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: "white" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Onlineadmission" style={{ color: "white" }}>
                Online Admission
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Offlineadmission" style={{ color: "white" }}>
                Offline Admission
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Visitstudent" style={{ color: "white" }}>
                Visit Student
              </Link>
            </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Onlinefee" style={{ color: "white" }}>
               Online fee pay
              </Link>
            </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Offlinefee" style={{ color: "white" }}>
               Offline fee pay
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact" style={{ color: "white" }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
