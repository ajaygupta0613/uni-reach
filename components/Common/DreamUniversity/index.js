import React from "react";
import styles from "@/styles/Dream.module.css";
import Image from "next/image";

const DreamUniversity = () => {
  return (
    <div className={styles.dream__container__main}>
      <Image
        src={`/dream/bg-dream.png`}
        width={2000}
        height={2000}
        alt="Image"
        className={styles.dream__bg}
      />
      <div className={styles.dream__container__sub}>
        <h3 className={styles.dream__heading}>
          Get Into Your Dream University Today!
        </h3>

        <button className={`${styles.dream__btn} ${styles.button__calypso}`}>
          <span>Talk to an advisor</span>
        </button>
      </div>
    </div>
  );
};

export default DreamUniversity;
