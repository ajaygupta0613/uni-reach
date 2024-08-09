import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const AboutSection = ({ aboutData }) => {
  return (
    <div
      className={`${styles.about__section__container} ${styles.left_border} ${styles.right_border}`}
    >
      <div className={styles.about__section__sub}>
        <div className={styles.left__box__content}>
          <Image
            src={`/home/left-vector.svg`}
            width={100}
            height={100}
            alt="Vector SVG"
            className={styles.arrow_vector__svg}
          />
          <h2 className={styles.about__section__title}>About Us</h2>
        </div>

        <div className={styles.center__box__content}>
          <div
            className={styles.about__section__text}
            dangerouslySetInnerHTML={{ __html: aboutData.About_Detail }}
          />
        </div>

        <div className={styles.left__box__content}></div>
      </div>
    </div>
  );
};

export default AboutSection;
