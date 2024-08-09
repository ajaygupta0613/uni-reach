import React from "react";
import styles from "@/styles/Dream.module.css";
import Image from "next/image";
import Link from "next/link";

const DreamUniversity = ({ optionData }) => {
  return (
    <div className={styles.dream__container__main}>
      <Image
        src={`${optionData.banner_image}`}
        width={2000}
        height={2000}
        alt="Image"
        className={styles.dream__bg}
      />
      <div className={styles.dream__container__sub}>
        <h3 className={styles.dream__heading}>{optionData.heading}</h3>

        <button className={`${styles.dream__btn} ${styles.button__calypso}`}>
          <Link href={`${optionData.button_url}`}>
            {optionData.button_text}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default DreamUniversity;
