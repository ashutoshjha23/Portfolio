import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Reach me</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:ashutoshjha2312@email.com">ashutoshjha2312@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/myname">linkedin.com/ashutoshjha</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.linkedin.com/in/ashutosh-jha-230750270/">github.com/ashutoshjha</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/insta.png")} alt="Insta icon" />
          <a href="https://www.instagram.com/ashuutoshjha/">instagram.com/ashuutoshjha</a>
        </li>
      </ul>
    </footer>
  );
};
