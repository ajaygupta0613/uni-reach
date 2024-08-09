import React from "react";
import styles from "@/styles/About.module.css";
import Image from "next/image";

const Team_section = ({ teamData }) => {
  return (
    <div
      className={`${styles.OurTeam__container} ${styles.left_border} ${styles.right_border}`}
    >
      <div className={styles.why__box__img}>
        <Image
          src={`/home/left-vector.svg`}
          width={100}
          height={100}
          alt="Vector"
          className={styles.why__vector}
        />
        <h2 className={styles.our__team__heading}>Our Team</h2>
      </div>
      {teamData.map((leader, index) => (
        <div key={index} className={styles.our__team__sub}>
          <div className={styles.leadership__img__box}>
            <Image
              src={leader.image}
              width={2000}
              height={2000}
              alt={leader.name}
              className={styles.our__team__img}
            />
          </div>
          <div className={styles.our__team__box}>
            <h3 className={styles.our__team__name}>{leader.name}</h3>
            <div
              className={styles.our__team__designation}
              dangerouslySetInnerHTML={{ __html: leader.designation }}
            />
            <div
              className={styles.our__team__desc}
              dangerouslySetInnerHTML={{ __html: leader.details }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team_section;
