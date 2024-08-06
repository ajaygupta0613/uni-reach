import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const AboutSection = () => {
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
          <p className={styles.about__section__text}>
            At Unireach, we earnestly believe in celebrating students and their
            potential. Our aim is to bridge the gap between aspiring students
            and the universities they rightly deserve by helping them{" "}
            <span className={styles.bold}> channelize their strengths</span> and
            overcome their weaknesses. We inevitably stand out for meticulously
            <span className={styles.bold}>
              {" "}
              crafting individual stories
            </span>{" "}
            and empowering students to find their{" "}
            <span className={styles.bold}>authentic voice</span> throughout the
            daunting process of college applications. As seasoned counselors
            with a <span className={styles.bold}>decade-long experience</span>{" "}
            in the industry, we understand the{" "}
            <span className={styles.bold}>
              pulse of the overseas admissions process
            </span>{" "}
            and guide students in making informed decisions about their future.
            From continual counseling at each step to providing students with
            <span className={styles.bold}> real-time feedback</span>, our system
            of profile development is highly personalized as we are constantly
            evolving the best practices and strategies to help students{" "}
            <span className={styles.bold}>
              {" "}
              navigate the college landscape.
            </span>
          </p>
        </div>

        <div className={styles.left__box__content}></div>
      </div>
    </div>
  );
};

export default AboutSection;
