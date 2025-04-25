import React from "react";
import styles from "../css-modules/Footer.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.container}>
     
        <div className={styles.footer}>
          <div className={styles.imgLinks}>
            <a href="https://github.com/girish110" target="_blank">
              <FaGithub className={styles.imgGithub} />
            </a>
            <a href="https://www.linkedin.com/in/girish-sharma-4b98b2214/">
              <FaLinkedin className={styles.imgLinkedin} />
            </a>
            <a href="https://www.instagram.com/girisharma10/">
              <FaInstagram className={styles.imgInstagram} />
            </a>
          </div>
          <p> © Copyright 2025. All rights reserved.</p>
          <p>{"{ Designed and developed by Girish with ❤️ }"}</p>
        </div>
    </div>
  );
}

export default Footer;
