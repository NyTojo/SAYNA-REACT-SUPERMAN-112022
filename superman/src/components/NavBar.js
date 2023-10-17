import React from 'react';
import logoHome from '../assets/logos/logo_blanc.png';
import '../styles/navbar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img src={logoHome} alt="batman logo" />
        </NavLink>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Eshop" className="nav-link">
                ESHOP
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/MonCompte" className="nav-link">
                MON COMPTE
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
