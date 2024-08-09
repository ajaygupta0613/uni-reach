import React from "react";
import styles from "@/styles/About.module.css";
import Image from "next/image";

const OurStory = ({ storyData }) => {
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
            <h2 className={styles.why__heading}>Our Story</h2>
          </div>
          <div
            className={styles.why__desc}
            dangerouslySetInnerHTML={{ __html: storyData.description }}
          />
        </div>
        <div className={styles.why__box}>
          <Image
            src={`${storyData.image}`}
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

export default OurStory;
