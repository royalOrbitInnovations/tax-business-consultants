"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ButtonUI from "../ButtonUI";

export default function CarouselOverlayText({ textData, currentIndex }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    // Add a resize listener to handle window resizing
    window.addEventListener("resize", updateWidth);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div className="absolute top-[55%] max-6xl:top-[50%] translate-y-[-50%] right-[20rem] items-end justify-end text-left flex flex-col gap-[4rem] tracking-widest">
      <AnimatePresence mode="wait">
        <motion.div
          className="pl-[20rem] max-6xl:pl-[5rem]"
          key={currentIndex}
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-[7rem]/30 w-[70%] max-16xl:w-[80%] max-16xl:text-[6rem]/25 max-6xl:w-[90%] max-4xl:w-[100%]">
            <span className="text-(--ui-dark)">{textData.head1} </span>
            {textData.head2}
          </h1>
          <div className="flex gap-[1.5rem] items-center jutext-left w-[50%] max-14xl:w-[60%] max-4xl:w-[80%] border-b border-gray-400 pb-[2rem] mt-[3rem]">
            <img
              src="/svg/arrorw-top-right-tax-business-consultants.svg"
              alt="Arrow SVG"
              className="h-[4rem] w-[4rem]"
            />
            <p className="text-[2rem]/10 max-16xl:text-[1.7rem] max-6xl:text-[2rem] max-16xl:font-bold">
              {textData.p}
            </p>
          </div>

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
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
