import React from "react";
import styles from "@/styles/About.module.css";
import Image from "next/image";

const OurStory = () => {
  return (
    <div className={styles.why__us__container}>
      <div className={styles.why__us__sub}>
        <div className={styles.why__box}>
          <div className={styles.why__box__img}>
            <Image
              src={`/home/white-vector.svg`}
              width={100}
              height={100}
              alt="Vector"
              className={styles.why__vector}
            />
            <h2 className={styles.why__heading}>Our Story</h2>
          </div>

          <p className={styles.why__desc}>
            The seed of Unireach germinated very organically. While counseling
            students of the Jayshree Periwal Group of Schools and mentoring them
            in crafting veritable and compelling college applications, our
            founders received innumerable requests from students and parents to
            launch something that would steer students towards setting foot into
            their dream college. As they regularly worked with students to guide
            them in the overseas admissions process, they were able to discern
            how worthy aspirants fail to make it to their right-fit universities
            due to lack of information and misguidance.
            <br />
            Unireach was born out of this inordinate desire to rectify the
            misinformation and bust these misconceptions about overseas
            admissions prevailing in the market. The founders launched Unireach
            with a selective number of students and began to expand as the
            students were successfully able to traverse their journey to
            excellence. They would give students the freedom to tap into their
            interests authentically and devise for them strategic and
            individualized career paths. These tireless and diligent efforts
            have led to the establishment of an unblemished, immersive, and
            transparent system that perpetually reinforces the belief of
            students and parents in Unireach and its top-notch services.
          </p>
        </div>
        <div className={styles.why__box}>
          <Image
            src={`/about/our-story.png`}
            width={2000}
            height={2000}
            alt="Why Us"
            className={styles.why__us__img}
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
