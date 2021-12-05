import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const SOCIALS = [
  {
    icon: "fab fa-github",
    link: "https://github.com/Harper-Wu",
  },
  {
    icon: "fab fa-linkedin",
    link: "https://www.linkedin.com/in/harper-xia-wu/",
  },
  {
    icon: "far fa-envelope",
    link: "mailto:haarperwu@gmail.com",
  },
];

const SocialSection = () => {
  return SOCIALS.map((item, i) => (
    <a href={item.link} className="social-icon-link" target="_blank">
      <i className={item.icon}></i>
    </a>
  ));
};

export default function Footer() {
  return (
    <div className="footer-container" id="footer-section">
      <h1>Find Me</h1>
      <div className="social-icons">
        <SocialSection />
      </div>
    </div>
  );
}
