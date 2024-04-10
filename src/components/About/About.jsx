import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
              Hello! I'm Ashutosh Jha, a Computer Science Engineering student currently pursuing my Bachelor's degree in Computer Science at SRM University Ktr. With a fervent passion for coding and technology, I'm an enthusiastic coder exploring various languages and concepts to enhance my skills. Proficient in languages like Python, JavaScript, and Java, I specialize in web development, adept in HTML, CSS, JavaScript, and React. My solid understanding of data structures and algorithms, coupled with experience in version control using Git and GitHub, equips me well for problem-solving challenges.
              </p>
              <p>Apart from coding, I'm an avid sports enthusiast, enjoying activities like Football, and gaming is another passion of mine.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
