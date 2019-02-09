import React from "react";
import './style.css';
import { Link } from "react-router-dom";



function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <ul className="nav">
      <li className="title">
      <p className="nav-header"><Link to={"/"}> the beauty bunny collective </Link> </p>
      </li>
      <li className="nav-item"><p id="login">Login|Sign Up</p></li>
    </ul>
    </nav>
  );
}

export default Navbar;