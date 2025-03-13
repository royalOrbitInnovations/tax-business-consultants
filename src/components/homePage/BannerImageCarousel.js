"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import CarouselOverlayText from "./CarouselOverlayText";

const images = [
  "/images/banner-image-1.webp",
  "/images/banner-image-2.webp",
  "/images/banner-image-3.webp",
];

const textData = [
  {
    head1: "Tax Business consultant",
    head2: "is a professional service provided by individuals or firms",
    p: "Elevate Your Business to the next level",
  },
  {
    head1: "Hold 100% company Ownership",
    head2: "and get started with the registration in Qatar",
    p: "You will always have the full control of your company",
  },
  {
    head1: "Local Sponsorships",
    head2:
      "is to have a Qatari national as your sponsor to do business in the country",
    p: "Make your business easier to run",
  },
];

export default function MainCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-[85vh] max-6xl:h-[100vh] z-[-1]">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full shrink-0 relative">
            <Image
              priority
              fill
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-white opacity-80" />
          </div>
        ))}
      </div>
      <CarouselOverlayText
        textData={textData[currentIndex]}
        currentIndex={currentIndex}
      />
    </div>
  );
}
