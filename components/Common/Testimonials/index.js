import React from "react";
import Slider from "react-slick";
import styles from "@/styles/Testimonial.module.css";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Image
        src={`/home/red-vector.svg`}
        width={32}
        height={32}
        alt="Vector SVG"
        className={styles.slider_left_vector}
      />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Image
        src={`/home/red-vector.svg`}
        width={32}
        height={32}
        alt="Vector SVG"
        className={styles.slider_right_vector}
      />
    </div>
  );
}

const Testimonials = ({ testimonialData }) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={`${styles.our__testimonials__container} ${styles.left_border} ${styles.right_border}`}
    >
      <div className={styles.our__testimonials__sub}>
        <div className={styles.left__box__content__container}>
          <div className={styles.testimonials_image_title}>
            <Image
              src={`/home/left-vector.svg`}
              width={100}
              height={100}
              alt="Vector SVG"
              className={styles.arrow_vector__svg}
            />
            <h2 className={styles.testimonials__section__title}>
              Our Student and Parent Reviews
            </h2>
          </div>
        </div>
        <div className={styles.our__testimonials__right}>
          <Image
            src={`/home/testimonial-vactor.svg`}
            width={100}
            height={100}
            alt="Vector SVG"
            className={styles.testimonial_vactor_left}
          />
          <div className={styles.testimonial_cards_container}>
            <Slider {...settings}>
              {testimonialData.map((data, id) => {
                return (
                  <div className={styles.slider__container} key={id}>
                    <div className={styles.testimonial_card}>
                      {data.acf.profile_image && (
                        <Image
                          src={data.acf.profile_image}
                          width={100}
                          height={100}
                          alt="Testimonials Image"
                          className={styles.testimonial_profile_img}
                        />
                      )}
                      <div className={styles.testimonial_details}>
                        <div
                          className={styles.testimonial_text}
                          dangerouslySetInnerHTML={{
                            __html: data.acf.review,
                          }}
                        />
                      </div>
                      <div className={styles.testimonial_ratting}>
                        {Array.from({ length: 5 }, (_, index) => (
                          <Image
                            key={index}
                            src={
                              index < data.acf.rating
                                ? "/home/Star-fill.svg"
                                : "/home/Star-empty.svg"
                            }
                            width={100}
                            height={100}
                            alt="Rating Star"
                            className={
                              index < data.acf.rating
                                ? styles.testimonial_ratting_fill
                                : styles.testimonial_ratting_empty
                            }
                          />
                        ))}
                      </div>
                      <div className={styles.testimonial_name}>
                        {data.title.rendered}
                      </div>
                      <div className={styles.testimonial_designation}>
                        {data.acf.location}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          <Image
            src={`/home/testimonial-vactor.svg`}
            width={100}
            height={100}
            alt="Vector SVG"
            className={styles.testimonial_vactor_right}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
