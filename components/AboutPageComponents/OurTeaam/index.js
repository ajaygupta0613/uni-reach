import React from "react";
import styles from "@/styles/About.module.css";
import Image from "next/image";

const OurTeam = () => {
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
      <div className={styles.our__team__sub}>
        <div className={styles.our__team__img__box}>
          <Image
            src={`/about/Priyal Gupta.png`}
            width={2000}
            height={2000}
            alt="Why Us"
            className={styles.our__team__img}
          />
        </div>
        <div className={styles.our__team__box}>
          <h3 className={styles.our__team__name}>Priyal Gupta</h3>
          <p className={styles.our__team__designation}>
            Senior Associate, Unireach Consulting 
          </p>
          <p className={styles.our__team__desc}>
            An ardent and sagacious mentor, Priyal strongly believes that her
            journey from being a student at Jayshree Periwal International
            School to Brown University and beyond has been nothing short of an
            adventure. With a degree in Applied Math-Economics, she has explored
            various corners of the professional world globally including a
            prolific stint in management consulting at Arthur D Little’s Boston
            and New York City offices.
            <br />
            It wasn't until she ran the rat race herself, that she realized her
            true passion lay in helping others run, through education and
            mentorship, and finding the right race for them- be it a triathlon,
            a plogathon, a sprint, or simply a jog in the park!
            <br />
            She felt that her newfound purpose resonated profoundly with Mr.
            Ayush Periwal and Mrs. Aakriti Periwal, her own illustrious mentors
            from highschool. She feels like life has come full circle now upon
            joining Unireach. Henceforth, she aspires to rekindle passion in
            today's students, guiding them on a path of self-discovery, academic
            exploration, college applications, and lifelong success.
          </p>
        </div>
      </div>
      <div className={styles.our__team__sub}>
        <div className={styles.our__team__img__box}>
          <Image
            src={`/about/Dhruv Kabra.png`}
            width={2000}
            height={2000}
            alt="Why Us"
            className={styles.our__team__img}
          />
        </div>
        <div className={styles.our__team__box}>
          <h3 className={styles.our__team__name}>Dhruv Kabra</h3>
          <p className={styles.our__team__designation}>
            Associate, Unireach Consulting 
          </p>
          <p className={styles.our__team__desc}>
            A passionate and dedicated professional, Dhruv works with students
            diligently to foster their academic and personal growth. His role
            involves ideating and implementing initiatives and projects that
            empower students throughout and beyond their application process. 
            <br />
            His commitment to student development began in high school when he
            had the privilege of serving as the Head Boy of one of India’s most
            prestigious institutions, Jayshree Periwal High School, Jaipur. This
            experience enabled him to cultivate leadership, organizational, and
            mentoring skills that continue to be invaluable in his current
            role. 
            <br />
            Apart from his professional responsibilities, he is also an author
            with four books to his credit and a student of English literature
            from Kirorimal College, University of Delhi. His academic journey
            has not only honed his communication and critical thinking skills
            but also instilled in him an ardent love for language and education.
            He is also a committed English educator and public speaking
            trainer. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
