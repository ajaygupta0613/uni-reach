import React from "react";
import styles from "@/styles/Service.module.css";
import Image from "next/image";

const ServiceSection = () => {
  return (
    <div
      className={`${styles.about__section__container} ${styles.left_border} ${styles.right_border}`}
    >
      <div className={styles.about__section__sub}>
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
          <div className={styles.contact__info}>
            <p className={styles.about__section__text}>
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

        <div className={styles.center__box__content}></div>
      </div>
    </div>
  );
};

export default ServiceSection;
