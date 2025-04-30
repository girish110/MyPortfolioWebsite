import React from "react";
import styles from "../../css-modules/About.module.css";
import aboutgirish from "../../assets/aboutSection/about_girish.png";

// Helper to animate both plain and underlined text
const animateText = (text, startIndex, underline = false) => {
  return text.split("").map((char, i) => (
    <span
      key={`${startIndex + i}`}
      className={`${styles.letter}`}
      style={{ animationDelay: `${(startIndex + i) * 0.015}s` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

function About() {
  const animatedContent = [
    animateText(
      " I'm Girish Sharma, a frontend web and mobile developer with a strong focus on delivering elegant, responsive, and user-centric digital experiences. My expertise lies in using modern frameworks like ReactJS to build high-quality applications that not only look good but function seamlessly across devices. I'm deeply interested in clean UI/UX design, performance optimization, and creating products that solve real-world problems. I'm a lifelong learner, always eager to explore new tools and technologies to push the boundaries of what I can build. I believe in the power of collaboration and am always excited to work with teams that share a passion for innovation and excellence. Let's connect and create something amazing together!",0
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
