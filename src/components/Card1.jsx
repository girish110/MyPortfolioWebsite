import React from "react";
import styles from "../css-modules/Card1.module.css";
import { Link } from "react-router";
import "../App.css";

// import FloatingObjects from "./FloatingObjects";

function Card1() {
  return (
    <div className={styles.container}>
      {/* <FloatingObjects/> */}
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Girish👋</h1>
        <p className={styles.subtitle}>
          A passionate Frontend web and mobile developer , turning creativity
          into interactive experiences.
        </p>

        <Link to="/projects" className={styles.cta}>
          View My Work
        </Link>
        <a
          href="/src/GIRISH_SHARMA.pdf"
          className={styles.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          View CV
        </a>
      </div>
    </div>
  );
}

export default Card1;
