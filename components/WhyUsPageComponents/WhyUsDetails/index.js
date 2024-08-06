import React from "react";
import styles from "@/styles/WhyUs.module.css";
import Image from "next/image";

const WhyUsDetails = () => {
  return (
    <div
      className={`${styles.about__section__container} ${styles.left_border} ${styles.right_border}`}
    >
      <div className={styles.why__us__section__sub}>
        <div className={styles.left__box__content}>
          <Image
            src={`/home/left-vector.svg`}
            width={100}
            height={100}
            alt="Vector SVG"
            className={styles.arrow_vector__svg}
          />
          <h2 className={styles.about__section__title}>Why Us</h2>
        </div>

        <div className={styles.center__box__content}>
          <p className={styles.about__section__text}>
            At Unireach, we sincerely believe that the only way to do
            exceptional work is by loving what you do. And therefore, at every
            step, we <span className={styles.bold}>empower</span> our{" "}
            <span className={styles.bold}>students to find</span> their calling
            - <span className={styles.bold}>their ikigai.</span> We encourage
            them to chase their dreams and ambitions passionately, but with
            mindfulness. We facilitate them to explore the plethora of
            opportunities available to them and derive joy and awareness in the
            process.
            <br />
            We are not limited to college counseling and profile building, but
            strive to render a proficient{" "}
            <span className={styles.bold}>‘college readiness programme’.</span> 
            <br />
            We understand that navigating the college application process is
            like climbing Everest—it's tough and demanding. That's why we don't
            promise you a cakewalk; instead, we{" "}
            <span className={styles.bold}>
              prepare you for the rigorous hustle,
            </span>{" "}
            empowering you to conquer every obstacle. In your journey towards
            the peak of Mount Everest, we guide you with the expertise and
            dedication of a Sherpa.
            <br />
            From integral soft skills and character development to teaching you
            how to meet a deadline and uphold significant responsibilities, we
            ensure that we{" "}
            <span className={styles.bold}>
              not only help you reach your dream college, but also prepare you
              for it.
            </span>{" "}
          </p>
        </div>

        <div className={styles.left__box__content}></div>
      </div>
    </div>
  );
};

export default WhyUsDetails;
