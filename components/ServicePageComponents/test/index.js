import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/Service.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = ({ serviceData }) => {
  const leftBox = useRef(null);
  const rightBox = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: leftBox.current,
        start: "top top",
        endTrigger: rightBox.current,
        end: "bottom bottom",
        invalidateOnRefresh: true,
        pin: leftBox.current,
        markers: true,
      });
    });
    return () => ctx.revert();
  }, []);

  // ScrollTrigger Refresh
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 10);

    return () => clearTimeout(timer);
  }, []);

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
          <div className={styles.tab_list} ref={rightBox}>
            {serviceData.services.map((tab, index) => (
              <div
                key={index}
                className={`${styles.tab_item} ${
                  activeTab === index ? styles.active : ""
                }`}
                onClick={() => handleTabClick(index)}
              >
                <Image
                  src={tab.icon}
                  width={50}
                  height={50}
                  alt={`${tab.title} Icon`}
                  className={styles.service__icons}
                />
                {tab.title}
              </div>
            ))}
          </div>

          <div className={styles.tab_panel} ref={leftBox}>
            {serviceData.services.map((tab, index) => (
              <div
                key={index}
                className={`${styles.tab_content} ${
                  activeTab === index ? styles.active : styles.hidden
                }`}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: tab.description }}
                  className={styles.service_tab_content}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
