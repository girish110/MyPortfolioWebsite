import React from "react";
import EMSi from "../../project-videos/EMS_2.mp4";
import { motion } from "framer-motion";
import styles from "../../components/Projects/EMS.module.css";
import image from "../../project-videos/Base_image.png";
import { useInView } from "react-intersection-observer";

function EMS() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3, // % of the component visible before animating
  });

  return (
    <>
      <div className={styles.container}>
        <div
          ref={ref}
          className={styles.videoWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            className={styles.laptopContainer}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            initial={{ opacity: 0, y: 500 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <img
              src={image}
              alt="Laptop Mockup"
              className={styles.laptopImage}
            />
            
              <video
                className={styles.projectVideo}
                src={EMSi}
                autoPlay
                muted
                loop
                playsInline
              />
            
          </div>
        </div>

        <motion.div
          className={styles.projectDefinition}
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h1 className={styles.title}>Employee Management System</h1>
          <p className={styles.description}>
            The Employee Management System is a comprehensive desktop
            application developed using Java Swing for the user interface and
            MySQL as the backend database. Designed to enhance workforce
            management within an organization, this system offers a full suite
            of CRUD (Create, Read, Update, Delete) functionalities. Users can
            add new employees, modify existing records, delete entries, and
            update employee details seamlessly through a user-friendly
            interface. One of the key strengths of the application is its
            real-time database integration—every action performed within the
            interface is instantly reflected in the connected MySQL database,
            ensuring data consistency and integrity at all times. The system
            also includes robust functionality to display all employee data
            within the application itself, offering an organized and accessible
            view of the records for administrators or HR personnel.
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default EMS;
