import React from "react";
import styles from "../css-modules/Card3.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Card3() {

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5, // % of the component visible before animating
  });

  return (
    <div className={styles.quoteSection}>
      <motion.blockquote
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="Inconsolota"
      >
        “Code is not just lines of logic, it's poetry in motion.”<br />
        <span>- Girish</span>
      </motion.blockquote>
    </div>
  );
}

export default Card3;
