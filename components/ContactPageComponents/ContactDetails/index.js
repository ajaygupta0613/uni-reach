import React from "react";
import styles from "@/styles/Contact.module.css";
import Image from "next/image";

const ContactDetails = ({ contactData }) => {
  return (
    <div
      className={`${styles.about__section__container} ${styles.left_border} ${styles.right_border}`}
    >
      <div className={styles.about__section__sub}>
        <div className={styles.left__box__content__container}>
          <div className={styles.our__service_image_title}>
            <Image
              src={`/home/left-vector.svg`}
              width={100}
              height={100}
              alt="Vector SVG"
              className={styles.arrow_vector__svg}
            />
            <h2 className={styles.about__section__title}>
              {contactData.heading}
            </h2>
          </div>
          <div className={styles.contact__info}>
            <ul className={styles.ul__links}>
              {contactData.Contact_Info.map((info, index) => (
                <li className={styles.contact__links} key={index}>
                  <Image
                    src={`${info.icon}`}
                    width={30}
                    height={30}
                    alt="Phone Svg"
                    className={styles.contact__svg}
                  />
                  <a href={info.link}>{info.lable}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.center__box__content}>
          <form className={styles.contact__form__container}>
            <div className={styles.contact_form_input_block_half}>
              <div className={styles.contact_lable}>
                <Image
                  src={`/contact/fi_1077063.svg`}
                  width={20}
                  height={20}
                  alt="Vector SVG"
                  className={styles.contact__svg}
                />
                <label htmlFor="frm-name">Name*</label>
              </div>
              <input
                id="frm-name"
                type="text"
                name="first"
                autoComplete="given-name"
                required
              />
            </div>
            <div className={styles.contact_form_input_block_half}>
              <div className={styles.contact_lable}>
                <Image
                  src={`/contact/fi_542638.svg`}
                  width={20}
                  height={20}
                  alt="Vector SVG"
                  className={styles.contact__svg}
                />
                <label htmlFor="frm-email">Email*</label>
              </div>
              <input
                id="frm-email"
                type="email"
                name="email"
                autoComplete="email"
                required
              />
            </div>
            <div className={styles.contact_form_input_block_half}>
              <div className={styles.contact_lable}>
                <Image
                  src={`/contact/fi_126509.svg`}
                  width={20}
                  height={20}
                  alt="Vector SVG"
                  className={styles.contact__svg}
                />
                <label htmlFor="frm-phone">Phone*</label>
              </div>
              <input
                id="frm-phone"
                type="text"
                name="phone"
                autoComplete="tel"
                required
              />
            </div>
            <div className={styles.contact_form_input_block_half}>
              <div className={styles.contact_lable}>
                <Image
                  src={`/contact/fi_665049.svg`}
                  width={20}
                  height={20}
                  alt="Vector SVG"
                  className={styles.contact__svg}
                />
                <label htmlFor="frm-last">Subject</label>
              </div>
              <input
                id="frm-subject"
                type="text"
                name="last"
                autoComplete="family-name"
              />
            </div>
            <div className={styles.contact_form_input_block}>
              <div className={styles.contact_lable}>
                <Image
                  src={`/contact/fi_2356780.svg`}
                  width={20}
                  height={20}
                  alt="Vector SVG"
                  className={styles.contact__svg}
                />
                <label htmlFor="frm-message">Message</label>
              </div>
              <textarea id="frm-message" rows="6" name="message"></textarea>
            </div>
            <div className="button block">
              <button
                type="submit"
                className={`${styles.why__btn} ${styles.button__calypso}`}
              >
                <span>SUBMIT</span>
              </button>
            </div>
          </form>
        </div>

        <div className={styles.left__box__content}></div>
      </div>
    </div>
  );
};

export default ContactDetails;
