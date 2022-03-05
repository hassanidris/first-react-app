import React from 'react';
import logo from './logo-2.svg';

function Navbar() {
  return (
    <div className="navbar navbar-expand-md text-primary">
      <div className="container">
        <a href="https://reactjs.org" className="navbar-brand">
          <img src={logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="mainmenu">
        <ul className="navbar-nav ms-auto fw-bold">
          <li className="nav-item">
            <a href="#hero" className="nav-link">Service</a>
          </li>
          <li className="nav-item">
            <a href="#features" className="nav-link">About</a>
          </li>
    
          <li className="nav-item">
            <a href="#faq" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    
    </div>
  </div>
  );
}

export default Navbar;