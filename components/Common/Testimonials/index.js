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

const sliderData = [
  {
    profile: "/home/profile-img.png",
    description:
      "With Aakriti Ma’am's unwavering support and invaluable guidance, I found the perfect university and discovered my true potential. The attention and care given to every aspect of my application exceeded my expectations. From harnessing my passions authentically to expanding my vocabulary and curating a balanced high-school life, my experience with Unireach was beyond excellent. Despite my inconsistent grades and indecisiveness, they helped me navigate the stressful application process effortlessly. Thanks to Aakriti Ma’am, I received an acceptance from NYU in the ED 1 round. Her assurance and motivation were crucial in curating an application that showcased my diverse interests and achievements.  From harnessing my passions authentically to expanding my",
    name: "Anoushka Reddy",
    location: "Hyderabad",
  },
  {
    profile: "/home/profile-img.png",
    description:
      "With Aakriti Ma’am's unwavering support and invaluable guidance, I found the perfect university and discovered my true potential. The attention and care given to every aspect of my application exceeded my expectations. From harnessing my passions authentically to expanding my vocabulary and curating a balanced high-school life, my experience with Unireach was beyond excellent. Despite my inconsistent grades and indecisiveness, they helped me navigate the stressful application process effortlessly. Thanks to Aakriti Ma’am, I received an acceptance from NYU in the ED 1 round. Her assurance and motivation were crucial in curating an application that showcased my diverse interests and achievements.  From harnessing my passions authentically to expanding my",
    name: "Anoushka Reddy",
    location: "Hyderabad",
  },
  {
    profile: "/home/profile-img.png",
    description:
      "With Aakriti Ma’am's unwavering support and invaluable guidance, I found the perfect university and discovered my true potential. The attention and care given to every aspect of my application exceeded my expectations. From harnessing my passions authentically to expanding my vocabulary and curating a balanced high-school life, my experience with Unireach was beyond excellent. Despite my inconsistent grades and indecisiveness, they helped me navigate the stressful application process effortlessly. Thanks to Aakriti Ma’am, I received an acceptance from NYU in the ED 1 round. Her assurance and motivation were crucial in curating an application that showcased my diverse interests and achievements.  From harnessing my passions authentically to expanding my",
    name: "Anoushka Reddy",
    location: "Hyderabad",
  },
  {
    profile: "/home/profile-img.png",
    description:
      "With Aakriti Ma’am's unwavering support and invaluable guidance, I found the perfect university and discovered my true potential. The attention and care given to every aspect of my application exceeded my expectations. From harnessing my passions authentically to expanding my vocabulary and curating a balanced high-school life, my experience with Unireach was beyond excellent. Despite my inconsistent grades and indecisiveness, they helped me navigate the stressful application process effortlessly. Thanks to Aakriti Ma’am, I received an acceptance from NYU in the ED 1 round. Her assurance and motivation were crucial in curating an application that showcased my diverse interests and achievements.  From harnessing my passions authentically to expanding my",
    name: "Anoushka Reddy",
    location: "Hyderabad",
  },
];

const Testimonials = () => {
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
              {sliderData.map((item, id) => {
                return (
                  <div className={styles.slider__container}>
                    <div className={styles.testimonial_card} key={id}>
                      <Image
                        src={item.profile}
                        width={100}
                        height={100}
                        alt="Testimonials Image"
                        className={styles.testimonial_profile_img}
                      />
                      <div className={styles.testimonial_details}>
                        <p>{item.description}</p>
                      </div>
                      <div className={styles.testimonial_ratting}>
                        <Image
                          src={`/home/Star-fill.svg`}
                          width={100}
                          height={100}
                          alt="Vector SVG"
                          className={styles.testimonial_ratting_fill}
                        />
                        <Image
                          src={`/home/Star-fill.svg`}
                          width={100}
                          height={100}
                          alt="Vector SVG"
                          className={styles.testimonial_ratting_fill}
                        />
                        <Image
                          src={`/home/Star-fill.svg`}
                          width={100}
                          height={100}
                          alt="Vector SVG"
                          className={styles.testimonial_ratting_fill}
                        />
                        <Image
                          src={`/home/Star-fill.svg`}
                          width={100}
                          height={100}
                          alt="Vector SVG"
                          className={styles.testimonial_ratting_fill}
                        />
                        <Image
                          src={`/home/Star-empty.svg`}
                          width={100}
                          height={100}
                          alt="Vector SVG"
                          className={styles.testimonial_ratting_empty}
                        />
                      </div>
                      <div className={styles.testimonial_name}>{item.name}</div>
                      <div className={styles.testimonial_designation}>
                        {item.location}
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
