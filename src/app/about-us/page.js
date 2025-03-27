import AboutUs from "@/components/aboutUs/AboutUs";
import LetsCollaborate from "@/components/aboutUs/LetsCollaborate";
import OurMission from "@/components/aboutUs/OurMission";
import TilesAboutUs from "@/components/aboutUs/TilesAboutUs";
import WhyChooseUs from "@/components/aboutUs/WhyChooseUs";
import FAQ from "@/components/FAQ/FAQ";
import InitialPageText from "@/components/InitialPageText";
import PageBanner from "@/components/PageBanner";
import Head from "next/head";

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
      <OurMission />
      <FAQ bg="#EFEAE6" />
      <LetsCollaborate />
    </>
  );
}
