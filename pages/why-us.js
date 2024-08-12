import Head from "next/head";

import Header from "@/components/Common/Header";
import DreamUniversity from "@/components/Common/DreamUniversity";
import Testimonials from "@/components/Common/Testimonials";
import Footer from "@/components/Common/Footer";

import WhyUsBanner from "@/components/WhyUsPageComponents/Banner";
import WhyUsDetails from "@/components/WhyUsPageComponents/WhyUsDetails";

export default function Home({ pageData, optionPageData, testimonialData }) {
  return (
    <>
      <Head>
        <title>Why Us - Unireach</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header headerOption={optionPageData.acf} />
      <WhyUsBanner bannerData={pageData.banner} />
      <WhyUsDetails whyUsData={pageData.why_us_details} />
      <Testimonials testimonialData={testimonialData} />
      <DreamUniversity optionData={optionPageData.acf} />
      <Footer footerOption={optionPageData.acf} />
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const apiData = `https://unireach.in/wp-json/wp/v2/pages/591`;
    const optionData = `https://unireach.in/wp-json/acf/v3/options/option`;
    const responsePageData = await fetch(apiData);
    const PageData = await responsePageData.json();

    const acf = PageData?.acf;
    const responseOptionPageData = await fetch(optionData);
    const optionPageData = await responseOptionPageData.json();

    if (acf) {
      // Function to fetch image URL by ID
      const fetchImageUrl = async (imageId) => {
        try {
          const response = await fetch(
            `https://unireach.in/wp-json/wp/v2/media/${imageId}`
          );
          const imageData = await response.json();
          return imageData.source_url;
        } catch (error) {
          console.error(`Error fetching image data for ID ${imageId}:`, error);
          return null;
        }
      };

      // Recursively update acf object to replace image IDs with URLs
      const replaceImageIdsWithUrls = async (data, parentKey = "") => {
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const currentKey = parentKey ? `${parentKey}.${key}` : key;
            if (typeof data[key] === "number") {
              const imageUrl = await fetchImageUrl(data[key]);
              if (imageUrl) {
                console.log(
                  `Replacing image ID ${data[key]} at ${currentKey} with URL ${imageUrl}`
                );
                data[key] = imageUrl;
              } else {
                console.warn(
                  `Failed to fetch URL for image ID ${data[key]} at ${currentKey}`
                );
              }
            } else if (typeof data[key] === "object" && data[key] !== null) {
              await replaceImageIdsWithUrls(data[key], currentKey);
            }
          }
        }
      };

      await replaceImageIdsWithUrls(acf);
    } else {
      console.warn("No ACF data found in PageData");
    }
    // Fetch Testimonials CPT data
    const testimonialRes = await fetch(
      `https://unireach.in/wp-json/wp/v2/testimonial?per_page=100`
    );
    const testimonialData = await testimonialRes.json();
    return {
      props: {
        pageData: acf,
        optionPageData,
        testimonialData,
      },
      revalidate: 30,
    };
  } catch (error) {
    console.error("Error fetching page data:", error);
    return {
      notFound: true,
    };
  }
};
