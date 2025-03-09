import AboutUs from "@/components/aboutUs/AboutUs";
import TilesAboutUs from "@/components/aboutUs/TilesAboutUs";
import WhyChooseUs from "@/components/aboutUs/WhyChooseUs";
import InitialPageText from "@/components/InitialPageText";
import PageBanner from "@/components/PageBanner";

export default function About() {
  return (
    <>
      <PageBanner
        image="/images/about-us-banner-image.webp"
        mainText="Our Story"
        currentPage="About Us"
      />
      <InitialPageText
        heading="Who We Are"
        text="Tax Business Consultants LLC. is a trusted partner that offers comprehensive support services to startups and established businesses. With a focus on innovation and  client satisfaction, our team of experts provides expert solutions in market analysis, strategic planning, and financial modeling."
      />
      <AboutUs />
      <TilesAboutUs />
      <WhyChooseUs />
    </>
  );
}
