import React from "react";
import styles from "../css-modules/Card2.module.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


function Card2() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // % of the component visible before animating
  });

  return (
    <div className={styles.skillsSection}>
      {/* <FloatingObjects /> */}
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <h2 className={styles.heading}>💡 Skills & Technologies</h2>
      </motion.h2>
      <motion.p
        ref={ref}
        className={styles.container}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
      >
        <p className={styles.description}>
          I work with a wide range of modern web technologies and tools to
          create fast, responsive, and intuitive apps. I also enjoy solving
          real world problems and implement it in programming aspect
        </p>
      </motion.p>
      <motion.div
        ref={ref}
        className={styles.container}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.2, ease: "easeOut", delay: 1 }}
      >
        <div className={styles.skillsGrid}>
          <span>Java</span>
          <span>Python</span>
          <span>React JS</span>
          <span>Frontend</span>
          <span>React Native</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Git</span>
          <span>MySQL</span>
        </div>
      </motion.div>
    </div>
  );
}

export default Card2;
