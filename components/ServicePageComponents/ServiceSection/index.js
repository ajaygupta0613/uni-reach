import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from "@/styles/Service.module.css";
import "react-tabs/style/react-tabs.css";
import Image from "next/image";

const ServiceSection = () => {
  return (
    <div
      className={`${styles.about__section__container} ${styles.left_border}`}
    >
      <div className={`${styles.about__section__sub} ${styles.center_border}`}>
        <div className={styles.left__box__content__container}>
          <div className={styles.our__service_image_title}>
            <Image
              src={`/home/left-vector.svg`}
              width={100}
              height={100}
              alt="Vector SVG"
              className={styles.arrow_vector__svg}
            />
            <h2 className={styles.about__section__title}>Our Services</h2>
          </div>
          <div className={styles.contact__info}>
            <p className={styles.about__section__text}>
              Our work involves{" "}
              <span className={styles.bold}>
                designing the blueprint of your career pathway from A-Z.
              </span>{" "}
              We believe in ensuring students are ready with their best
              application but also the right skills to ensure they excel in
              their careers.
            </p>
          </div>
        </div>

        <div className={styles.center__box__content}>
          <Tabs>
            <TabList>
              <Tab>
                <Image
                  src={`/service/fi_2644379%20(1).svg`}
                  width={60}
                  height={60}
                  alt="Vector SVG"
                  className={styles.service__icons}
                />
                Personalized Strategy{" "}
              </Tab>
              <Tab>Academic Guidance</Tab>
              <Tab>Test Prep Resources and Strategies</Tab>
              <Tab>College Selection</Tab>
              <Tab>Crafting Authentic Essays and Stellar Applications</Tab>
              <Tab>Document Preparation</Tab>
              <Tab>Interview Prep</Tab>
              <Tab>Continuous Support</Tab>
            </TabList>

            <TabPanel>
              <p>
                Every student is a unique masterpiece. At Unireach, we help you
                discover and develop your passion, interests and strengths.
              </p>
              <ul>
                <li>
                  We conduct a deep dive into your academic background,
                  interests, and dreams. 
                </li>
                <li>
                  Then, we craft a custom roadmap guiding you from course
                  selection, passion projects, award applications, summer
                  schools to extracurriculars, with pit stops to track progress
                  and tweak the plan. 
                </li>
                <li>
                  Based on the year you join us, we divide and strategize the
                  plan for each year with focus points in order to create an
                  achievable list of goals.
                </li>
              </ul>
              <p>
                It's your journey, and we're here to make sure you reach your
                desired destination, helping you learn to navigate roadblocks
                along the way.
              </p>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
