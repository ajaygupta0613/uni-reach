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
    { srNo: 9, university: "NYU Stern", placements: 27 },
    { srNo: 10, university: "Dartmouth College", placements: 7 },
    { srNo: 11, university: "Brown University", placements: 20 },
    { srNo: 12, university: "Cornell University", placements: 20 },
    { srNo: 13, university: "Duke University", placements: 17 },
    { srNo: 14, university: "Northwestern University", placements: 16 },
    { srNo: 15, university: "Johns Hopkins University", placements: 21 },
    { srNo: 16, university: "Carnegie Mellon University", placements: 34 },
    {
      srNo: 17,
      university: "University of California, Berkeley (UC Berkeley)",
      placements: 29,
    },
    {
      srNo: 18,
      university: "University of California, Los Angeles (UCLA)",
      placements: 48,
    },
    {
      srNo: 19,
      university: "University of Southern California (USC)",
      placements: 52,
    },
    { srNo: 20, university: "Georgetown University", placements: 16 },
    { srNo: 21, university: "Vanderbilt University", placements: 19 },
    { srNo: 22, university: "Emory University", placements: 54 },
    { srNo: 23, university: "New York University (NYU CAS)", placements: 45 },
    { srNo: 24, university: "Rice University", placements: 9 },
    {
      srNo: 25,
      university: "New York University Shanghai (NYU Shanghai)",
      placements: 13,
    },
    {
      srNo: 26,
      university: "New York University Abu Dhabi (NYU Abu Dhabi)",
      placements: 14,
    },
    { srNo: 27, university: "Barnard College", placements: 11 },
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
