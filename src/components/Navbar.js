import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import "../styles/Navbar.css";
import "../styles/Button.css";
import Button from "./Button";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link
          className="navbar-logo"
          to="hero-section"
          spy={true}
          smooth={true}
          duration={200}
        >
          HARPER <i className="fas fa-code"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "navbar-menu active" : "navbar-menu"}>
          {/* TODO: refacter to map */}
          <li className="nav-item">
            <Link
              className="nav-link"
              to="proj-section"
              onClick={closeMobileMenu}
              spy={true}
              smooth={true}
              duration={200}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="footer-section"
              onClick={closeMobileMenu}
            >
              Find Me
            </Link>
          </li>
          <li className="nav-item-mobile">
            <Link className="nav-link" to="/" onClick={closeMobileMenu}>
              Resume
            </Link>
          </li>
        </ul>
        {button && (
          <Button
            buttonStyle="btn--outline"
            buttonSize="btn--medium"
            linkTo="/"
          >
            Resume
          </Button>
        )}
      </div>
    </nav>
  );
}
