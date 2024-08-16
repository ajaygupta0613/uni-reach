import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = ({ headerOption }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Add or remove the class to disable scrolling
    if (menuOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }

    // Clean up when the component unmounts
    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [menuOpen]);

  return (
    <div className={`${styles.header__main__container} ${styles.left_border}`}>
      <div className={styles.header__sub__container}>
        <div className={styles.header__logo__box}>
          <Link href={`/`}>
            <Image
              src={`${headerOption.logo}`}
              width={2000}
              height={2000}
              alt="Unireach Logo"
              priority
              className={styles.header__logo}
            />
          </Link>
        </div>

        <div className={styles.header__links__box}>
          <ul className={`${styles.ul__links} ${menuOpen ? styles.open : ""}`}>
            {headerOption.menu.map((menus, index) => (
              <li
                className={`${styles.link} ${
                  router.pathname == `${menus.link}`
                    ? styles.active__header__link
                    : ""
                }`}
                key={index}
              >
                <Link href={`${menus.link}`}>{menus.menu_label}</Link>
              </li>
            ))}
          </ul>
          <div className={styles.header__social__box}>
            {headerOption.social_media.map((social, index) => (
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

        {/* Mobile Menu Toggle Button */}
        <div
          className={`${styles.mobile__menu__toggle} ${
            menuOpen ? styles.open : ""
          }`}
          onClick={toggleMenu}
        >
          <div className={styles.menu__icon}></div>
          <div className={styles.menu__icon}></div>
          <div className={styles.menu__icon}></div>
        </div>

        {/* Overlay for Mobile Menu */}
        <div
          className={`${styles.mobile__menu__overlay} ${
            menuOpen ? styles.show : ""
          }`}
          onClick={toggleMenu}
        ></div>
      </div>
    </div>
  );
};

export default Header;
