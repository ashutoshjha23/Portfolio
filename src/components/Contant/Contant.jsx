import React from "react";

import styles from "./Contant.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Ashutosh Jha</h1>
        <p className={styles.description}>
          Hello!
        </p>
        <a href="mailto:ashutoshjha23122@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/ashutosh.jpg")}
        alt="That's Me!"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
