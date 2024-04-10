import React from "react";

import styles from "./Skills.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      
      <div className={styles.compo}>HTML
      <p className={styles.texx}>80%</p></div>

      <div className={styles.compo1}>CSS
      <p className={styles.texx}>90%</p></div>

      <div className={styles.compo2}>React
      <p className={styles.texx}>75%</p></div>

      <div className={styles.compo3}>Node
      <p className={styles.texx}>70%</p></div>

      <div className={styles.compo4}>MySQL
      <p className={styles.texx}>80%</p></div>

      <div className={styles.compo5}>JavaScript
      <p className={styles.texx}>80%</p></div>

      <div className={styles.compo6}>Figma
      <p className={styles.texx}>95%</p></div>

    </section>
  );
};
