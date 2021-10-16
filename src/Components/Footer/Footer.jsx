import React from "react";

const Footer = (props) => {
  return (
    <div className="footer-container">
      <footer className="footer" ref={props.section}>
        <div className="footer-left">
          <h3>NBA Info</h3>

          <p className="footer-company-name">nba-info &copy; 2021</p>
        </div>

        <div className="footer-center">
          <div className="location">
            <i className="fa fa-map-marker"></i>
            <p>Jove Ilica 15 Belgrade, Serbia</p>
          </div>

          <div className="phone">
            <i className="fa fa-phone"></i>
            <p>+381 2837019</p>
          </div>

          <div className="email">
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:nbainfo@gmail.com">nbainfo@gmail.com</a>
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
