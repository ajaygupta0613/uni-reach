import React from "react";
import Link from "next/link";
import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Footer = ({ footerOption }) => {
  const router = useRouter();
  return (
    <div className={styles.footer__main}>
      <div className={styles.footer__sub}>
        <div className={styles.footer__box}>
          <Image
            src={`${footerOption.logo}`}
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
            {footerOption.menu.map((menus, index) => (
              <li
                className={`${styles.link} ${
                  router.pathname == "/about-us"
                    ? styles.active__header__link
                    : ""
                }`}
                key={index}
              >
                <Link href={`${menus.link}`}>{menus.menu_label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.border__line__center} />

        <div className={styles.footer__box}>
          <h3 className={`${styles.link__follow}`}>Contact Us</h3>
          <ul className={`${styles.ul__links} ${styles.contact_info_list}`}>
            {footerOption.contact_us.map((info, index) => (
              <li className={styles.contact__links} key={index}>
                <Image
                  src={`${info.icon}`}
                  width={30}
                  height={30}
                  alt="Phone Svg"
                  className={styles.contact__svg}
                />
                <a href={info.link}>{info.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.border__line__right} />

        <div className={styles.footer__box}>
          <h3 className={`${styles.link__follow}`}>Follow Us</h3>

          <div className={styles.footer__social__box}>
            {footerOption.social_media.map((social, index) => (
              <Link href={social.link} key={index}>
                <Image
                  src={`${social.Social_Icon}`}
                  width={25}
                  height={25}
                  alt="Instagram"
                  priority
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.copy__right__box}>
        <div className={styles.copy__sub__box}>
          <h5 className={styles.copy__txt}>{footerOption.copywrite}</h5>
          <h6 className={styles.copy__txt}>Powered by Thor Solutions</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
