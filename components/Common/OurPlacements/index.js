import React, { useState, useEffect } from "react";
import styles from "@/styles/Placements.module.css";
import Image from "next/image";

const OurPlacements = ({ placementsData }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Set the first 10 posts in the state
    setPosts(placementsData && placementsData.slice(0, 10));
  }, []);
  console.log("p", placementsData);
  return (
    <div className={styles.placements__container}>
      <div className={styles.placements__sub}>
        <div className={styles.left__box__content}>
          <Image
            src={`/home/white-vector.svg`}
            width={100}
            height={100}
            alt="Vector SVG"
            className={styles.arrow_vector__svg}
          />
          <h2 className={styles.placement__section__title}>Our Placements</h2>
        </div>
        <div className={styles.right__box__content}>
          <table className={styles.placement__table}>
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>University</th>
                <th>Number of Placements Secured</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title.rendered}</td>
                  <td>{item.acf.number}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className={`${styles.table__btn} ${styles.button__calypso}`}>
            <span>KNOW MORE</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurPlacements;
