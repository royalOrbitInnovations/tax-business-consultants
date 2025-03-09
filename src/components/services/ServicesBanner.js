import Image from "next/image";
import PageIndicator from "../PageIndicator";

export default function ServicesBanner() {
  return (
    <div className="relative h-[80vh] w-[100vw]">
      <div className="absolute inset-0 bg-black opacity-50 z-[100]" />
      <Image
        src="/images/services-banner-image.png"
        alt="services-banner-image"
        fill
        className="object-cover object-center"
      />
      <PageIndicator mainText="Our Services" currentPage="Services" />
    </div>
  );
}
