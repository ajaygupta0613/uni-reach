import React from "react";
import styles from "@/styles/Service.module.css";
import Image from "next/image";

const ServiceSection = ({ serviceData }) => {
  return (
    <div
      className={`${styles.about__section__container} ${styles.left_border}`}
    >
      <div className={`${styles.about__section__sub} ${styles.center_border}`}>
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
            <div
              className={styles.about__section__text}
              dangerouslySetInnerHTML={{ __html: serviceData.sub_heading }}
            />
          </div>
        </div>

        <div className={styles.center__box__content}>
          {serviceData.services.map((service, index) => (
            <div key={index} className={styles.service__item}>
              <div className={styles.service__title__sec}>
                <Image
                  src={service.icon}
                  width={50}
                  height={50}
                  alt={`${service.title} Icon`}
                  className={styles.service__icons}
                />
                <h3 className={styles.service__title}>{service.title}</h3>{" "}
              </div>
              <div
                className={styles.service__description}
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
