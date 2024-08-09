import React from "react";
import styles from "@/styles/About.module.css";
import Image from "next/image";

const Leadership = ({ leadershipData }) => {
  return (
    <div className={styles.leadership__container}>
      <div className={styles.why__box__img}>
        <Image
          src={`/home/white-vector.svg`}
          width={100}
          height={100}
          alt="Vector"
          className={styles.why__vector}
        />
        <h2 className={styles.why__heading}>Our leadership</h2>
      </div>
      {leadershipData.map((leader, index) => (
        <div key={index} className={styles.leadership__sub}>
          <div className={styles.leadership__img__box}>
            <Image
              src={leader.image}
              width={2000}
              height={2000}
              alt={leader.name}
              className={styles.leadership__img}
            />
          </div>
          <div className={styles.leadership__box}>
            <h3 className={styles.leadership__name}>{leader.name}</h3>
            <div
              className={styles.leadership__designation}
              dangerouslySetInnerHTML={{ __html: leader.designation }}
            />
            <div
              className={styles.leadership__desc}
              dangerouslySetInnerHTML={{ __html: leader.details }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leadership;
