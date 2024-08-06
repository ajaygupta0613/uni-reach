import React from "react";
import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <div className={styles.footer__main}>
      <div className={styles.footer__sub}>
        <div className={styles.footer__box}>
          <Image
            src={`/header/logo.png`}
            width={100}
            height={100}
            alt="Unireach Logo"
            priority
            className={styles.footer__logo}
          />
        </div>

        <div className={styles.border__line__left} />

        <div className={styles.footer__box}>
          <ul className={styles.ul__links}>
            <li
              className={`${styles.link} ${
                router.pathname == "/about-us"
                  ? styles.active__header__link
                  : ""
              }`}
            >
              About Us
            </li>
            <li
              className={`${styles.link} ${
                router.pathname == "/services"
                  ? styles.active__header__link
                  : ""
              }`}
            >
              Services
            </li>
            <li
              className={`${styles.link} ${
                router.pathname == "/our-placements"
                  ? styles.active__header__link
                  : ""
              }`}
            >
              Our Placements
            </li>
            <li
              className={`${styles.link} ${
                router.pathname == "/why-us" ? styles.active__header__link : ""
              }`}
            >
              Why Us
            </li>
          </ul>
        </div>

        <div className={styles.border__line__center} />

        <div className={styles.footer__box}>
          <ul className={styles.ul__links}>
            <li className={`${styles.link__follow}`}>Contact Us</li>

            <li className={styles.contact__links}>
              <Image
                src={`/footer/phone.svg`}
                width={30}
                height={30}
                alt="Phone Svg"
                className={styles.contact__svg}
              />
              <a href="tel:+91 97733 34457">+91 97733 34457</a>
            </li>

            <li className={styles.contact__links}>
              <Image
                src={`/footer/email.svg`}
                width={30}
                height={30}
                alt="Phone Svg"
                className={styles.contact__svg}
              />
              <a href="mailto:outreach@unireach.in">outreach@unireach.in</a>
            </li>
          </ul>
        </div>

        <div className={styles.border__line__right} />

        <div className={styles.footer__box}>
          <h3 className={`${styles.link__follow}`}>Follow Us</h3>

          <div className={styles.footer__social__box}>
            <Image
              src={`/header/instagram.svg`}
              width={30}
              height={30}
              alt="Phone Svg"
              className={styles.instagram__svg}
            />

            <Image
              src={`/footer/linkedin.svg`}
              width={30}
              height={30}
              alt="Phone Svg"
              className={styles.linkedin__svg}
            />
          </div>
        </div>
      </div>

      <div className={styles.copy__right__box}>
        <div className={styles.copy__sub__box}>
          <h5 className={styles.copy__txt}>Copyright © 2023 - Unireach</h5>
          <h6 className={styles.copy__txt}>Powered by Thor Solutions</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
