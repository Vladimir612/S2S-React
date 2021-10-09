import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="footer" ref={props.section}>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>NBA Info</h3>

          <p className="footer-company-name">nba-info &copy; 2021</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Jove Ilica 15</span>
              Belgrade, Serbia
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+371 2837019</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:nbainfo@gmail.com">nbainfo@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            NBA Info is a website that provides informations and insights to NBA
            league. It is a free website for NBA lovers.
          </p>

          <div className="footer-icons">
            <a href="http://www.facebook.com">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="http://twitter.com">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="http://github.com">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
