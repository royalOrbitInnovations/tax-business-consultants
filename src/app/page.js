import BannerImageCarousel from "@/components/homePage/BannerImageCarousel";
import ClientSuccessStory from "@/components/homePage/ClientSuccessStory";
import OurCoverArea from "@/components/homePage/OurCoverArea";
import WelcomeToTBC from "@/components/homePage/WelcomeToTBC";

export default function Home() {
  return (
    <div className="relative">
      <BannerImageCarousel />
      <OurCoverArea />
      <WelcomeToTBC />
      <ClientSuccessStory />
    </div>
  );
}
