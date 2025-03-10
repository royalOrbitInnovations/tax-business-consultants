"use client";

import ButtonUI from "../ButtonUI";
import { useEffect, useState } from "react";

export default function CarouselOverlayText() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const screenWidth = () => {
      const width = window.innerWidth;
      setWidth(width);
    };
    screenWidth();
  }, []);
  return (
    <div className="absolute top-[55%] max-6xl:top-[50%] translate-y-[-50%] left-[10%] flex flex-col gap-[4rem] tracking-widest ">
      <h1 className="text-[7rem]/30 w-[50%] max-16xl:w-[70%] max-16xl:text-[6rem]/25 max-6xl:w-[80%] max-4xl:w-[100%]">
        <span className="text-(--ui-dark)">Tax Business consultant</span> is a
        professional service provided by individuals or firms
      </h1>
      <div className="flex gap-[1.5rem] w-[40%] max-14xl:w-[60%] max-4xl:w-[80%] border-b border-gray-400 pb-[2rem]">
        <img
          src="/svg/arrorw-top-right-tax-business-consultants.svg"
          alt="Arrow SVG"
          className=" h-[5rem] w-[5rem]"
        />
        <p className="text-[2rem]/10 max-16xl:text-[1.7rem] max-6xl:text-[2rem] max-16xl:font-bold">
          Current business operations, identify areas of improvement, and
          develop strategies amd solutions to addess.
        </p>
      </div>
      {/* <hr className="bg-[--ui-dark]" /> */}
      <ButtonUI
        width={width <= 1600 ? "20rem" : "30rem"}
        size={width <= 1600 ? "1.8rem" : "2.2rem"}
        paddingY="1.8rem"
        to="/contact-us"
      >
        Explore More
        <img
          src="/svg/arrorw-top-right-tax-business-consultants.svg"
          alt="Arrow SVG"
          className="bg-white rounded-[50%] h-[2rem] w-[2rem]"
        />
      </ButtonUI>
    </div>
  );
}
