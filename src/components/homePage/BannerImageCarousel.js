"use client";

import Image from "next/image";
import { useState } from "react";
// import { useEffect } from "react";

const images = [
  "/images/banner-image-1.jpg",
  "/images/banner-image-2.jpg",
  "/images/banner-image-3.jpg",
];

export default function BannerImageCarousel() {
  const [imageNum, setImageNum] = useState(1);

  return (
    <div className="relative h-[85vh] w-[100vw]">
      <Image
        src="/images/banner-image-1.jpg"
        fill
        className="object-cover object-top"
        alt="Banner Carousel Image"
      />
    </div>
  );
}
