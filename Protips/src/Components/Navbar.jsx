import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>
        <Link to={"/"}>
          <span>Kalvium ❤️</span>
        </Link>
      </h1>
      <ul>
        <li>
          <Link to={"/contact"}>
            <span> Contact</span>
          </Link>
        </li>
        <li>
          <Link to={"/registrationform"}>
            <span> Registration Form</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
