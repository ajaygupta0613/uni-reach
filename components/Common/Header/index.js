import React from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = ({ headerOption }) => {
  const router = useRouter();
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
          <ul className={styles.ul__links}>
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
