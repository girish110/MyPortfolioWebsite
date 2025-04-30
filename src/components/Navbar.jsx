import React, { useState, useEffect } from "react";
import girishlogo from "../assets/giri_logo.png";
import { Link } from "react-router-dom";
import styles from "../css-modules/Navbar.module.css";

function Navbar() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setOpacity(0);
        } else {
          // Scrolling up
          setOpacity(0);
        }
      } else {
        // Near top of page
        setOpacity(1);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="navbar"
        style={{
          opacity,
          pointerEvents: opacity === 0 ? "none" : "auto",
        }}
      >
        <Link to="/" className={`${styles.image} ${styles.logoLink}`}>
          <img src={girishlogo} alt="ghibli" />
          <p className="agbalumo-regular">irish</p>
        </Link>

        <div className="navlinks">
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/about" className={styles.link}>
            About
          </Link>
          <Link to="/projects" className={styles.link}>
            Projects
          </Link>
          <Link to="/contact" className={styles.link}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
