import React from "react";
import styles from "@/styles/About.module.css";
import Image from "next/image";

const AboutBanner = ({ bannerData }) => {
  return (
    <div className={`${styles.about__banner__container} ${styles.left_border}`}>
      <Image
        src={`${bannerData.banner_image}`}
        width={2000}
        height={2000}
        alt="Banner Bg"
        className={styles.banner__bg}
      />

      <div className={styles.home__banner__sub}>
        <div className={styles.home__title__box}>
          <h1 className={styles.home__title}>{bannerData.banner_heading}</h1>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
