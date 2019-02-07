import React from "react";
import './style.css';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <ul className="nav">
      <li className="title">
      <p className="nav-header">the beauty bunny collective </p>
      </li>
      <li className="nav-item"><p id="login">Login|Sign Up</p></li>
    </ul>
    </nav>
  );
}

export default Navbar;