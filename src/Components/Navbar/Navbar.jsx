import React from "react";
import logo from "../../assets/images/nbaInfo-logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const scrollDown = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <div className="main-navbar">
      <div className="logo-wrapper">
        <img src={logo} alt="Basketball Court" className="bg-image" />
      </div>
      <div className="link-wrapper">
        <ul>
          <li>
            <Link to="#">Games</Link>
          </li>
          <li>
            <Link to="#">Players</Link>
          </li>
          <li>
            <Link to="#">Teams</Link>
          </li>
          <li>
            <Link to="/" onClick={scrollDown}>
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
