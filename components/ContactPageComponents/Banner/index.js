import React from "react";
import styles from "@/styles/About.module.css";
import Image from "next/image";

const PlacementsBanner = () => {
  return (
    <div className={`${styles.about__banner__container} ${styles.left_border}`}>
      <Image
        src={`/contact/banner.png`}
        width={2000}
        height={2000}
        alt="Banner Bg"
        className={styles.banner__bg}
      />

      <div className={styles.home__banner__sub}>
        <div className={styles.home__title__box}>
          <h1 className={styles.home__title}>Contact Us</h1>
        </div>
      </div>
    </div>
  );
};

export default PlacementsBanner;
