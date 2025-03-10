"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import TextWithBorder from "../TextWithBorder";

const data = [
  {
    link: "/images/slider-image-1.webp",
    type: "Business",
    text: "Busines Startup Consultants",
  },
  {
    link: "/images/slider-image-2.webp",
    type: "Business",
    text: "Business Administartion Services",
  },
  {
    link: "/images/slider-image-3.webp",
    type: "Busines",
    text: "Business Management Services",
  },
  {
    link: "/images/slider-image-4.webp",
    type: "Marketing",
    text: "Data Analytics",
  },
];

export default function OurCoverAreaSlider() {
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render nothing (or a loader) until we know the window width on the client
    return null;
  }

  // Only show a subset of items depending on the screen width
  const dataToShow =
    windowWidth < 500
      ? data.slice(0, 1)
      : windowWidth < 650
      ? data.slice(0, 2)
      : windowWidth < 800
      ? data.slice(0, 3)
      : data;

  return (
    <div className="flex w-[100%] justify-around max-6xl:items-center absolute top-[100%] left-0">
      {dataToShow.map((item, index) => (
        <div
          key={index}
          className="flex flex-col max-6xl:items-center gap-[2rem] max-6xl:w-[100%]"
        >
          <div className="relative h-[25rem] w-[46rem] max-18xl:w-[40rem] max-16xl:w-[35rem] max-15xl:w-[30rem] max-10xl:w-[25rem] max-5xl:w-[80%] max-10xl:h-[15rem] max-6xl:h-[20rem] max-5xl:h-[25rem] max-6xl:w-[37rem] aspect-[16/9]">
            <Image
              src={item.link}
              fill
              className="object-cover shadow-lg rounded-lg hover:scale-90 transition-all duration-000"
              alt="Slider Image"
            />
          </div>
          <TextWithBorder text={item.type} py="0.3rem" size="1.6rem" />
          <h3 className="text-4xl max-10xl:text-3xl max-10xl:font-bold">
            {item.text}
          </h3>
        </div>
      ))}
    </div>
  );
}
