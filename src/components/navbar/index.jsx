import React from "react";
import { Link } from "react-router-dom";
import FarmLogo from "../../assets/logo.png";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark navbar-default">
      <div className="container">
        <Link className="navbar-brand" to="#">
          <div className="d-flex align-items-center">
            <img className="logo" src={FarmLogo} alt="Farm Health Logo" />
            <h2 className="title__name">Farm Health</h2>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link nav__link__text" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav__link__text" to="/analyze">
                Analyze
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav__link__text" to="#">
                Learn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
