import React from "react";
import { Link } from "react-router-dom"
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = (props) => {
  return (
    <div className="footer">
      <footer className="footer-wrapper" ref={props.section}>
        <div className="footer-left">
          <h3>NBA Info</h3>

          <p className="footer-company-name">nba-info &copy; 2021</p>
        </div>

        <div className="footer-center">
          <div className="location">
            <FaMapMarkerAlt size={24} style={{margin: "5px 10px 0 0"}} />
            <p>Jove Ilica 15 Belgrade, Serbia</p>
          </div>

          <div className="phone">
            <FaPhone size={24} style={{margin: "5px 10px 0 0"}}/>
            <p>+381 2837019</p>
          </div>

          <div className="email">
            <FaEnvelope size={24} style={{margin: "5px 10px 0 0"}} />
            <p>
              <Link to="mailto:nbainfo@gmail.com">nbainfo@gmail.com</Link>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <h4>About the company</h4>
            NBA Info is a website that provides informations and insights to NBA
            league. It is a free website for NBA lovers.
          </p>

          <div className="footer-icons">
            <Link to="http://www.facebook.com">
              <FaFacebook />
            </Link>
            <Link to="https://www.instagram.com">
              <FaInstagram />
            </Link>
            <Link to="http://twitter.com">
              <FaGithub />
            </Link>
            <Link to="http://github.com">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
