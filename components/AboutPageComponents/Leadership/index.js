import React from "react";
import styles from "@/styles/About.module.css";
import Image from "next/image";

const Leadership = () => {
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
      <div className={styles.leadership__sub}>
        <div className={styles.leadership__img__box}>
          <Image
            src={`/about/Mrs. Aakriti Periwal.png`}
            width={2000}
            height={2000}
            alt="Why Us"
            className={styles.leadership__img}
          />
        </div>
        <div className={styles.leadership__box}>
          <h3 className={styles.leadership__name}>Mrs. Aakriti Periwal</h3>
          <p className={styles.leadership__designation}>
            CEO and Co-founder, Unireach Consulting
          </p>
          <p className={styles.leadership__desc}>
            Aakriti switched from her profession as an Indirect Tax Lawyer with
            Ernst and Young to Education in 2014 when she joined the Jayshree
            Periwal International School. Spearheading youth initiatives and
            college counselling in the school, Aakriti successfully counsels
            JPIS students to top universities across the globe including
            Stanford, Yale, Harvard, Cornell. Brown, Dartmouth, University of
            Oxford and more. <br />
            <br />
            When parents from different cities and schools approached Aakriti
            with questions, she realised the misinformation and myths that were
            spread across India related to the field of college admissions
            counselling. Feeling the need to bridge a gap between enthusiastic
            students and their right fit universities, Aakriti launched
            Unireach. <br />
            <br />
            Aakriti’s dedication has been recognized with prestigious awards,
            including the ‘Outstanding Educator’ by the University of Chicago
            and the ‘No.1 Career Counseling in India’ by Education World. With
            Unireach, Aakriti continues to empower students to achieve their
            academic dreams and build bright futures.
          </p>
        </div>
      </div>
      <div className={styles.leadership__sub}>
        <div className={styles.leadership__img__box}>
          <Image
            src={`/about/Ayush Periwal.png`}
            width={2000}
            height={2000}
            alt="Why Us"
            className={styles.leadership__img}
          />
        </div>
        <div className={styles.leadership__box}>
          <h3 className={styles.leadership__name}>Mr. Ayush Periwal</h3>
          <p className={styles.leadership__designation}>
            Co-founder, Unireach Consulting
          </p>
          <p className={styles.leadership__desc}>
            A dynamic entrepreneur and an influential leader, Mr. Periwal runs a
            network of 12 schools across India with about 12,000 students under
            his tutelage. A business management scholar from Babson College, he
            has harnessed his strategic thinking, unique educational perception,
            and entrepreneurial prowess to transform the face of education
            across the country.
            <br />
            <br />
            As the CEO and Academic Director of the Jayshree Periwal Group of
            Schools, he deploys his competence and expertise to consistently
            enhance the academic quality, infrastructure, technology, and
            community engagement in the schools. He has established a symphony
            of balanced learning in school with his clear-sightedness and
            creative and technical evolution.
            <br />
            <br />
            At Unireach Consulting, he has simplified the convoluted scenario of
            overseas admissions in India. Counseling them at every step as they
            steer towards their dream college, he has made the university
            experience more accessible for aspirants. He has recently been
            honoured with the prestigious ‘Human Development Leader Award
            (2023-24)’ by Education World. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
