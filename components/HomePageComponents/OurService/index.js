import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const OurService = () => {
  return (
    <div className={`${styles.our__service__container} ${styles.left_border}`}>
      <div className={styles.our__service__sub}>
        <div className={styles.left__box__content__container}>
          <div className={styles.our__service_image_title}>
            <Image
              src={`/home/left-vector.svg`}
              width={100}
              height={100}
              alt="Vector SVG"
              className={styles.arrow_vector__svg}
            />
            <h2 className={styles.about__section__title}>Our Services</h2>
          </div>
          <div className={styles.our__service_sub__title}>
            <p>
              {" "}
              Our work involves{" "}
              <span className={styles.bold}>
                designing the blueprint of your career pathway from A-Z.
              </span>{" "}
              We believe in ensuring students are ready with their best
              application but also the right skills to ensure they excel in
              their careers.
            </p>
          </div>
        </div>
        <div className={styles.our__service__right}>
          <div className={styles.our_service_card}>
            <Image
              src={`/home/fi_10891656.svg`}
              width={80}
              height={80}
              alt="Vector SVG"
              className={styles.vector__svg}
            />
            <h3 className={styles.about__section__title}>
              Personalized Strategy
            </h3>
          </div>
          <div className={styles.our_service_card}>
            <Image
              src={`/home/fi_10822609.svg`}
              width={80}
              height={80}
              alt="Vector SVG"
              className={styles.vector__svg}
            />
            <h3 className={styles.about__section__title}>Academic Guidance</h3>
          </div>
          <div className={styles.our_service_card}>
            <Image
              src={`/home/fi_2644379.svg`}
              width={80}
              height={80}
              alt="Vector SVG"
              className={styles.vector__svg}
            />
            <h3 className={styles.about__section__title}>Test Prep Support</h3>
          </div>
          <div className={styles.our_service_card}>
            <Image
              src={`/home/fi_9090105.svg`}
              width={80}
              height={80}
              alt="Vector SVG"
              className={styles.vector__svg}
            />
            <h3 className={styles.about__section__title}>College Selection </h3>
          </div>
          <div className={styles.our_service_card}>
            <Image
              src={`/home/fi_3012314.svg`}
              width={80}
              height={80}
              alt="Vector SVG"
              className={styles.vector__svg}
            />
            <h3 className={styles.about__section__title}>
              Stellar Applications
            </h3>
          </div>
          <div className={styles.our_service_card}>
            <Image
              src={`/home/fi_6302521.svg`}
              width={80}
              height={80}
              alt="Vector SVG"
              className={styles.vector__svg}
            />
            <h3 className={styles.about__section__title}>
              Document Preparation
            </h3>
          </div>
          <div className={styles.our_service_card}>
            <Image
              src={`/home/fi_4115681.svg`}
              width={80}
              height={80}
              alt="Vector SVG"
              className={styles.vector__svg}
            />
            <h3 className={styles.about__section__title}>Interview Prep </h3>
          </div>
          <div className={styles.our_service_card}>
            <Image
              src={`/home/fi_8834769.svg`}
              width={80}
              height={80}
              alt="Vector SVG"
              className={styles.vector__svg}
            />
            <h3 className={styles.about__section__title}>
              Continuous Support 
            </h3>
          </div>
          <div className={styles.our_service_card}></div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
