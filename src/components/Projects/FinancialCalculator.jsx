import React from "react";
import { motion } from "framer-motion";
import FC from "../../project-videos/FinancialCalculator.mp4";
import styles from "../../components/Projects/FinancialCalculator.module.css";

function FinancialCalculator() {
  return (
    <>
    <div className={styles.container}>
      <motion.div
        className={styles.projectDefinition}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1}}
      >
        <h1>Financial Calculator</h1>
        <p>
          An all-in-one mobile application designed to help users make informed
          investment decisions. The app includes powerful calculators for SIP
          (Systematic Investment Plan), Lumpsum Investment, and SWP (Systematic
          Withdrawal Plan). Users can input custom values, adjust sliders for
          returns and time period, and instantly visualize projected returns
          through dynamic calculations and interactive pie charts.
        </p>
      </motion.div>

      <motion.div
        className={styles.videoWrapper}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1}}
        transition={{ duration: 0}}
      >
        <motion.div
          className={styles.samsungFrame}
          initial={{ y: 200, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0 }}
        >
          <div className={styles.camera}></div>
          <video className={styles.projectVideo} src={FC} autoPlay loop muted playsInline />
        </motion.div>
      </motion.div>
      </div>
    </>
  );
}

export default FinancialCalculator;
