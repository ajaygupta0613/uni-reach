import Head from "next/head";

import Header from "@/components/Common/Header";
import DreamUniversity from "@/components/Common/DreamUniversity";
import Footer from "@/components/Common/Footer";

import ServiceBanner from "@/components/ServicePageComponents/Banner";
import ServiceSection from "@/components/ServicePageComponents/ServiceSection";

export default function Home({ pageData }) {
  return (
    <>
      <Head>
        <title>Services - Unireach</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <ServiceBanner bannerData={pageData.banner} />
      <ServiceSection serviceData={pageData.service_section} />
      <DreamUniversity />
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const apiData = `https://unireach.in/wp-json/wp/v2/pages/629`;
    const responsePageData = await fetch(apiData);
    const PageData = await responsePageData.json();

    const acf = PageData?.acf;

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

    return {
      props: {
        pageData: acf,
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
