import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="brand" to="/">
          GitHub Finder
        </Link>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link className="navbar-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
