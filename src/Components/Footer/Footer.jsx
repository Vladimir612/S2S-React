import React from "react";
import "./Footer.css";

const Footer = ({
  facebookURL,
  instagramURL,
  twitterURL,
  githubURL,
  phoneNumber,
  address,
  cityAndState,
  aboutCompany,
  email,
  siteName,
}) => {
  return (
    <div className="footer">
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>{siteName}</h3>

          <p className="footer-company-name">nba-info &copy; 2021</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>{address}</span>
              {cityAndState}
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>{phoneNumber}</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:nbainfo@gmail.com">{email}</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            {aboutCompany}
          </p>

          <div className="footer-icons">
            <a href={facebookURL}>
              <i className="fa fa-facebook"></i>
            </a>
            <a href={instagramURL}>
              <i className="fa fa-instagram"></i>
            </a>
            <a href={twitterURL}>
              <i className="fa fa-twitter"></i>
            </a>
            <a href={githubURL}>
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
