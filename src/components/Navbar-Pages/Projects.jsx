import React, { useRef } from "react";
import styles from "../../css-modules/Projects.module.css";
import FinancialCalculator from "../Projects/FinancialCalculator";
import EMS from "../Projects/EMS";
import { motion, useInView } from "framer-motion";

function Projects() {
  const fcRef = useRef(null);
  const emsRef = useRef(null);
  const fcInView = useInView(fcRef, { once: false, amount: 0 });
  const emsInView = useInView(emsRef, { once: false, amount: 0 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <>
      <div className={styles.FC}>
        <FinancialCalculator />
      </div>
      <div className={styles.EMS}>
        <EMS />
      </div>
    </>
  );
}

export default Projects;
