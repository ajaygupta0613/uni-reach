import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const WhyUs = () => {
  return (
    <div className={styles.why__us__container}>
      <div className={styles.why__us__sub}>
        <div className={styles.why__box}>
          <div className={styles.why__box__img}>
            <Image
              src={`/home/white-vector.svg`}
              width={100}
              height={100}
              alt="Vector"
              className={styles.why__vector}
            />
            <h2 className={styles.why__heading}>Why Us</h2>
          </div>

          <p className={styles.why__desc}>
            At Unireach, we sincerely believe that the only way to do
            exceptional work is by loving what you do. And therefore, at every
            step, we <span className={styles.bold}> empower</span> our{" "}
            <span className={styles.bold}>students to find</span> their calling
            - <span className={styles.bold}>their ikigai</span>. We encourage
            them to chase their dreams and ambitions passionately, but with
            mindfulness. We facilitate them to explore the plethora of
            opportunities available to them and derive joy and awareness in the
            process. <br />
            <span className={styles.desc__height}></span>
            We are not limited to college counseling and profile building, but
            strive to render a proficient{" "}
            <span className={styles.bold}>‘college readiness programme’</span>.
            We understand that navigating the college application process is
            like climbing Everest—it's tough and demanding. That's why we don't
            promise you a cakewalk; instead, we{" "}
            <span className={styles.bold}>
              prepare you for the rigorous hustle
            </span>
            , empowering you to conquer every obstacle. In your journey towards
            the peak of Mount Everest, we guide you with the expertise and
            dedication of a Sherpa. <br />{" "}
            <span className={styles.desc__height}></span> From integral soft
            skills and character development to teaching you how to meet a
            deadline and uphold significant responsibilities, we ensure that we
            <span className={styles.bold}>
              not only help you reach your dream college, but also prepare you
              for it.
            </span>
          </p>

          <button className={`${styles.why__btn} ${styles.button__calypso}`}>
            <span>TALK TO AN ADVISOR</span>
          </button>
        </div>
        <div className={styles.why__box}>
          <Image
            src={`/home/why-us.png`}
            width={2000}
            height={2000}
            alt="Why Us"
            className={styles.why__us__img}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
