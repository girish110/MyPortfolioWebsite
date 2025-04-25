import React from "react";
import styles from "../css-modules/Card4.module.css";
import { Link } from "react-router-dom";

function Card4() {
  return (
    <div className={styles.connectSection}>
      <h2>Let’s Connect</h2>
      <p>If you like what I do and want to collaborate, feel free to reach out!</p>
      <Link to="/contact" className={styles.contactBtn}>Contact Me</Link>
    </div>
  );
}

export default Card4;
