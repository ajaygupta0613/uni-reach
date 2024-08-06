import React from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <div className={`${styles.header__main__container} ${styles.left_border}`}>
      <div className={styles.header__sub__container}>
        <div className={styles.header__logo__box}>
          <Link href={`/`}>
            <Image
              src={`/header/logo.png`}
              width={100}
              height={100}
              alt="Unireach Logo"
              priority
              className={styles.header__logo}
            />
          </Link>
        </div>

        <div className={styles.header__links__box}>
          <ul className={styles.ul__links}>
            <li
              className={`${styles.link} ${
                router.pathname == "/about-us"
                  ? styles.active__header__link
                  : ""
              }`}
            >
              <Link href={`/about-us`}>About Us</Link>
            </li>
            <li
              className={`${styles.link} ${
                router.pathname == "/services"
                  ? styles.active__header__link
                  : ""
              }`}
            >
              <Link href={`/services`}>Services</Link>
            </li>
            <li
              className={`${styles.link} ${
                router.pathname == "/our-placements"
                  ? styles.active__header__link
                  : ""
              }`}
            >
              <Link href={`/our-placements`}>Our Placements</Link>
            </li>
            <li
              className={`${styles.link} ${
                router.pathname == "/why-us" ? styles.active__header__link : ""
              }`}
            >
              <Link href={`/why-us`}>Why Us</Link>
            </li>
            <li
              className={`${styles.link} ${
                router.pathname == "/contact-us"
                  ? styles.active__header__link
                  : ""
              }`}
            >
              <Link href={`/contact-us`}>Contact Us</Link>
            </li>
          </ul>
          <div className={styles.header__social__box}>
            <Image
              src={`/header/instagram.svg`}
              width={30}
              height={30}
              alt="Instagram"
              priority
            />

            <Image
              src={`/header/linkedin.svg`}
              width={30}
              height={30}
              alt="Linkedin"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
