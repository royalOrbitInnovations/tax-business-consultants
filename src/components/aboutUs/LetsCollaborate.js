"use client";

import dynamic from "next/dynamic";
import ButtonUI from "../ButtonUI";
import animationData from "../../animations/handshake.json";
import { useEffect, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function LetsCollaborate() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div className="px-[20rem] bg-[var(--ui-light)] py-[3rem] flex justify-between items-center overflow-hidden max-10xl:px-[10rem] max-6xl:flex-col max-6xl:justify-center max-5xl:px-[5rem]">
      <h2 className="w-[50%] text-[8rem]/30 max-15xl:text-[7rem] max-10xl:text-[5rem] max-6xl:w-[100%]">
        Lets Collaborate With Our Team!
      </h2>
      <div className="flex flex-col justify-center items-center">
        <ButtonUI
          to="/contact"
          width={width < 800 ? "25rem" : "35rem"}
          paddingY="2rem"
          size="3rem"
        >
          <Lottie animationData={animationData} loop={true} />
          Contact Us
        </ButtonUI>
      </div>
    </div>
  );
}
