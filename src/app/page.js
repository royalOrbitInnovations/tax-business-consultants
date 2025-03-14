import BannerImageCarousel from "@/components/homePage/BannerImageCarousel";
import Blog from "@/components/homePage/Blog";
import ClientSuccessStory from "@/components/homePage/ClientSuccessStory";
import Contact from "@/components/contact/Contact";
import IndustriesWeServe from "@/components/homePage/IndustriesWeServe";
import NewsAndInsights from "@/components/homePage/NewsAndInsights";
import OurCoverArea from "@/components/homePage/OurCoverArea";
import OurServices from "@/components/homePage/OurServices";
import Testimonials from "@/components/homePage/Testimonials";
import WelcomeToTBC from "@/components/homePage/WelcomeToTBC";
import WorldMap from "@/components/homePage/WorldMap";
import BusinessProcess from "@/components/homePage/BusinessProcess";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Leading Tax Consultancy Services in Qatar | Expert Tax Advisors
        </title>
        <meta
          name="description"
          content="Offering comprehensive tax consultancy services in Qatar, including corporate tax compliance, VAT advisory, and financial planning for businesses and individuals."
        />
      </Head>

      <BannerImageCarousel />
      <OurCoverArea />
      <WelcomeToTBC />
      <ClientSuccessStory />
      <WorldMap />
      <OurServices />
      <BusinessProcess />
      <Blog />
      <IndustriesWeServe />
      <Contact />
      <NewsAndInsights />
      <Testimonials />
    </>
  );
}
