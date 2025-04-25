import React from "react";
import styles from "../../css-modules/About.module.css";
import aboutgirish from "../../assets/aboutSection/about_girish.png";

// Helper to animate both plain and underlined text
const animateText = (text, startIndex, underline = false) => {
  return text.split("").map((char, i) => (
    <span
      key={`${startIndex + i}`}
      className={`${styles.letter} ${underline ? styles.underline : ""}`}
      style={{ animationDelay: `${(startIndex + i) * 0.015}s` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

function About() {
  const animatedContent = [
    animateText("I am Girish Sharma, a passionate ", 0),
    animateText("frontend web and mobile developer", 50, true),
    animateText(
      " focused on crafting clean & user‑friendly experiences. I specialize in building responsive web applications using modern technologies like ",
      90
    ),
    animateText("ReactJS", 250, true),
    animateText(" and ", 270),
    animateText("NodeJS", 280, true),
    animateText(
      ". I love creating clean animated UI, solving real-world problems, and constantly learning to grow as a developer.",
      300
    ),
  ].flat(); // Flatten the array to avoid nested arrays

  return (
    <div className={styles.aboutSection}>
      <div className={styles.text}>
        <h1>About Me</h1>
        <p className={styles.eduFont}>{animatedContent}</p>
      </div>
      <div>
        <img
          className={styles.me}
          src={aboutgirish}
          alt="about girish"
          height="100px"
        />
      </div>
    </div>
  );
}

export default About;
