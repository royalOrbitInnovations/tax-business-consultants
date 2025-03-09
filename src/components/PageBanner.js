import Image from "next/image";
import PageIndicator from "./PageIndicator";

export default function PageBanner({ image, mainText, currentPage }) {
  return (
    <div className="relative h-[80vh] w-[100vw]">
      <div className="absolute inset-0 bg-black opacity-50 z-[100]" />
      <Image
        src={image}
        alt="services-banner-image"
        fill
        className="object-cover object-center"
      />
      <PageIndicator mainText={mainText} currentPage={currentPage} />
    </div>
  );
}
