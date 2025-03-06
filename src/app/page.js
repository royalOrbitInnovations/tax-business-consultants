import BannerImageCarousel from "@/components/homePage/BannerImageCarousel";
import CarouselOverlayText from "@/components/homePage/CarouselOverlayText";

export default function Home() {
  return (
    <div className="relative">
      <BannerImageCarousel />
      <CarouselOverlayText />
    </div>
  );
}
