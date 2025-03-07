import BannerImageCarousel from "@/components/homePage/BannerImageCarousel";
import Blog from "@/components/homePage/Blog";
import ClientSuccessStory from "@/components/homePage/ClientSuccessStory";
import Contact from "@/components/homePage/Contact";
import IndustriesWeServe from "@/components/homePage/IndustriesWeServe";
import NewsAndInsights from "@/components/homePage/NewsAndInsights";
import OurCoverArea from "@/components/homePage/OurCoverArea";
import OurServices from "@/components/homePage/OurServices";
import Testimonials from "@/components/homePage/Testimonials";
import WelcomeToTBC from "@/components/homePage/WelcomeToTBC";
import WorldMap from "@/components/homePage/WorldMap";

export default function Home() {
  return (
    <>
      <BannerImageCarousel />
      <OurCoverArea />
      <WelcomeToTBC />
      <ClientSuccessStory />
      <WorldMap />
      <OurServices />
      <Blog />
      <IndustriesWeServe />
      <Contact />
      <NewsAndInsights />
      <Testimonials />
    </>
  );
}
