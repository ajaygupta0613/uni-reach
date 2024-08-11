import React, { useState, useEffect } from "react";
import styles from "@/styles/Placements_data.module.css";

const OurPlacements = ({ placementsData }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Sort the placements data by publish date in ascending order (oldest first)
    const sortedData = [...placementsData].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setPosts(sortedData.slice(0, 20));
  }, [placementsData]);

  const handleShowMore = () => {
    // Sort all posts by publish date in ascending order and set them in the state
    const sortedData = [...placementsData].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setPosts(sortedData);
  };

  return (
    <div className={styles.placements__container}>
      <div className={styles.placements__sub}>
        <div className={styles.center__box__content}>
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
          {posts.length < placementsData.length && (
            <button
              className={`${styles.table__btn} ${styles.button__calypso}`}
              onClick={handleShowMore}
            >
              <span>KNOW MORE</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurPlacements;
