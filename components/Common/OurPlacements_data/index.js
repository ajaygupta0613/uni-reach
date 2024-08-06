import React from "react";
import styles from "@/styles/Placements_data.module.css";
import Image from "next/image";

const OurPlacements_data = () => {
  const data = [
    { srNo: 1, university: "Harvard University", placements: 1 },
    { srNo: 2, university: "Stanford University", placements: 8 },
    { srNo: 3, university: "Caltech", placements: 2 },
    { srNo: 4, university: "Princeton University", placements: 8 },
    { srNo: 5, university: "Yale University", placements: 9 },
    { srNo: 6, university: "University of Pennsylvania", placements: 13 },
    { srNo: 7, university: "University of Chicago", placements: 15 },
    { srNo: 8, university: "Columbia University", placements: 6 },
  ];

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
              {data.map((item) => (
                <tr key={item.srNo}>
                  <td>{item.srNo}</td>
                  <td>{item.university}</td>
                  <td>{item.placements}</td>
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

export default OurPlacements_data;
