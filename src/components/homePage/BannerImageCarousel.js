"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/banner-image-1.jpg",
  "/images/banner-image-2.jpg",
  "/images/banner-image-3.jpg",
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
    <div className="relative w-full overflow-hidden h-[85vh]">
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
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
