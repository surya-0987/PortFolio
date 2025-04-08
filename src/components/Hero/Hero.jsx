import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Mahajan Surya</h1>
        <p className={styles.description}>
          I'm a <b>FRONTEND Developer</b>
        </p>
        <a href="mailto:suryamahajan2003@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
       
      </div>
      <img
        src={getImageUrl("hero/hero.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      
    </section>
  );
};
