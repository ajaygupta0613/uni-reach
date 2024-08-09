import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const OurService = ({ OurServiceData }) => {
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
            <div
              dangerouslySetInnerHTML={{ __html: OurServiceData.sub_heading }}
            />
          </div>
        </div>
        <div className={styles.our__service__right}>
          {OurServiceData.services?.map((service, index) => (
            <div key={index} className={styles.our_service_card}>
              <Image
                src={service.icon}
                width={50}
                height={50}
                alt={service.title}
                className={styles.service__icon}
              />
              <h3 className={styles.service__title}>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
