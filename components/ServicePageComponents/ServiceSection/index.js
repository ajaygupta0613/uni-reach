import React, { useEffect, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from "@/styles/Service.module.css";
import "react-tabs/style/react-tabs.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = ({ serviceData }) => {
  const tabListRef = useRef(null); // Reference for TabList (leftBox)
  const tabPanelsRef = useRef(null); // Reference for TabPanel (rightBox)

  useEffect(() => {
    const isDesktop = window.innerWidth > 1024;
    if (isDesktop && tabListRef.current && tabPanelsRef.current) {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: tabListRef.current,
          start: "top top",
          end: () =>
            tabPanelsRef.current.scrollHeight - tabListRef.current.offsetHeight,
          pin: true,
          pinSpacing: false,
          scrub: true,
          markers: true,
          invalidateOnRefresh: true,
        });
      });

      return () => ctx.revert();
    }
  }, [tabListRef, tabPanelsRef]); // Depend on refs

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
            <div
              className={styles.about__section__text}
              dangerouslySetInnerHTML={{ __html: serviceData.sub_heading }}
            />
          </div>
        </div>

        <div className={styles.center__box__content}>
          <Tabs>
            <TabList ref={tabListRef}>
              {" "}
              {/* Attach ref to TabList */}
              {serviceData.services.map((tab, index) => (
                <Tab key={index}>
                  <Image
                    src={tab.icon}
                    width={50}
                    height={50}
                    alt={`${tab.title} Icon`}
                    className={styles.service__icons}
                  />
                  {tab.title}
                </Tab>
              ))}
            </TabList>

            <div ref={tabPanelsRef}>
              {" "}
              {/* Attach ref to container holding all TabPanels */}
              {serviceData.services.map((tab, index) => (
                <TabPanel key={index}>
                  <div
                    className={`${styles.service_tab_content}`}
                    dangerouslySetInnerHTML={{ __html: tab.description }}
                  />
                </TabPanel>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
