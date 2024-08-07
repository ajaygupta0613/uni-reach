import React from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const WhyUs = ({ whyUsData }) => {
  console.log(whyUsData);
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
          <div
            className={styles.why__desc}
            dangerouslySetInnerHTML={{ __html: whyUsData.detail }}
          />

          <button className={`${styles.why__btn} ${styles.button__calypso}`}>
            <Link href={`${whyUsData.button_url}`}>
              {whyUsData.button_text}
            </Link>
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
