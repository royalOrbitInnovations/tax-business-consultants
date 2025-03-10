"use client";

import { useEffect, useRef, useMemo, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import meetingAnimation from "../../animations/meeting.json";
import rocketAnimation from "../../animations/rocket.json";
import legalAnimation from "../../animations/legal.json";
import approvedAnimation from "../../animations/approved.json";
import registerAnimation from "../../animations/register.json";
import homeAnimation from "../../animations/home.json";
import licenseAnimation from "../../animations/license.json";
import bankAnimation from "../../animations/bank.json";
import businessAnimation from "../../animations/business.json";
import togetherAnimation from "../../animations/together.json";
import ButtonUI from "../ButtonUI";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

const businessSteps = [
  {
    step: "Choose business activity",
    description:
      "Decide on the type of business activity you want to undertake and ensure that it is permissible under Qatar's laws and regulations.",
    animationData: rocketAnimation,
  },
  {
    step: "Choose a legal structure",
    description:
      "Decide on the type of legal structure for your business, such as a limited liability company (LLC), branch office, or representative office.",
    animationData: legalAnimation,
  },
  {
    step: "Obtain initial approvals",
    description:
      "Depending on the type of business, you may need to obtain approvals from various government agencies, such as the Ministry of Commerce and Industry, the Ministry of Economy and Commerce, or the Qatar Financial Center.",
    animationData: approvedAnimation,
  },
  {
    step: "Register the company",
    description:
      "Once you have obtained initial approvals, you will need to register your company with the Ministry of Commerce and Industry. You will need to provide documents such as the company's articles of association, a list of shareholders, and proof of address.",
    animationData: registerAnimation,
  },
  {
    step: "Obtain residence & work permits",
    description:
      "If you are planning to bring in foreign employees, you will need to obtain work and residence permits for them.",
    animationData: homeAnimation,
  },
  {
    step: "Obtain commercial registration",
    description:
      "This step is necessary for all types of businesses operating in Qatar. You will need to provide documents such as the company's registration certificate, a list of shareholders, and proof of address.",
    animationData: licenseAnimation,
  },
  {
    step: "Open a corporate bank account",
    description:
      "Once your business is registered, you will need to open a corporate bank account in order to start operations.",
    animationData: bankAnimation,
  },
  {
    step: "Start business operations",
    description:
      "Once all the necessary approvals, licenses, and permits have been obtained, you can start your business operations.",
    animationData: businessAnimation,
  },
];

export default function BusinessProcess() {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(0);

  // Update screenWidth on mount and resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define animation sizes based on screen width
  const meetingAnimationStyle =
    screenWidth && screenWidth < 600
      ? { width: "200px", height: "200px", transform: "scale(1)" }
      : { width: "300px", height: "300px", transform: "scale(2)" };

  const defaultLottieStyle =
    screenWidth && screenWidth < 600
      ? { width: "200px", height: "200px" }
      : { width: "300px", height: "300px" };

  const togetherAnimationStyle =
    screenWidth && screenWidth < 600
      ? { width: "200px", height: "200px" }
      : { width: "400px", height: "400px" };

  // Memoize the static steps data
  const stepsData = useMemo(() => businessSteps, []);

  useEffect(() => {
    const section = sectionRef.current;
    const items = listRef.current.querySelectorAll(".item");

    const viewportWidth = window.innerWidth;
    items.forEach((item, index) => {
      item.style.willChange = "transform, opacity";
      if (index !== 0) {
        gsap.set(item, { xPercent: 150 });
      }
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: () => `+=${items.length * viewportWidth + 500}`,
        scrub: 1,
      },
      defaults: { ease: "none" },
    });

    items.forEach((item, index) => {
      timeline.to(item, {
        scale: 0.9,
        borderRadius: "10px",
      });
      if (items[index + 1]) {
        timeline.to(items[index + 1], { xPercent: 0 }, "<");
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="scroll-section horizontal-section relative overflow-hidden"
    >
      <Image
        src="/images/tiles-bg.webp"
        alt="About Us Image"
        fill
        className="object-cover"
      />
      <h2 className="text-center mb-20 text-8xl max-12xl:text-6xl pt-[20rem] font-bold">
        The Process of Company Formation in Qatar
      </h2>
      <Lottie
        animationData={meetingAnimation}
        loop
        className="absolute bottom-[10%] right-[5%] max-10xl:bottom-[5%] max-10xl:right-[2%]"
        style={meetingAnimationStyle}
      />
      <div className="wrapper h-[60vh] ">
        <div
          ref={listRef}
          className="list relative h-full w-[50%] max-10xl:w-[70%] max-8xl:w-[90%] max-6xl:w-[100%]"
        >
          {stepsData.map((item, index) => (
            <div
              key={index}
              className="item absolute inset-0 w-[70vw] max-12xl:w-[80vw] max-10xl:w-[90vw] max-6xl:w-[100vw] h-full flex flex-col justify-center border-2 border-(--ui-dark) px-20 max-12xl:px-16 max-10xl:px-12 py-12 bg-white rounded-[50px] max-6xl:justify-start max-6xl:pt-[20rem] "
            >
              <p className="text-[25rem] max-12xl:text-[15rem] absolute opacity-50 z-[-1] left-10 top-0 text-(--ui-dark)">
                {index + 1}
              </p>
              <h2 className="text-8xl max-12xl:text-6xl mb-4">{item.step}</h2>
              <p className="text-2xl0 max-w-2xl max-6xl:text-start">
                {item.description}
              </p>
              <Lottie
                animationData={item.animationData}
                loop
                className="absolute bottom-[10%] right-[5%] max-10xl:bottom-[5%] max-10xl:right-[2%]"
                style={defaultLottieStyle}
              />
            </div>
          ))}
          <div className="item absolute inset-0 w-[70vw] max-12xl:w-[80vw] max-10xl:w-[90vw] max-6xl:w-[100vw] h-full flex flex-col items-center border border-gray-800 px-20 max-12xl:px-16 max-10xl:px-12 py-12 bg-white rounded-[50px] max-6xl:justify-start max-6xl:pt-[20rem] max-6xl:items-start">
            <p className="my-8 text-5xl">
              Start the steps of company formation in Qatar!
            </p>
            <ButtonUI size="5rem">Get A Quote</ButtonUI>
            <Lottie
              animationData={togetherAnimation}
              loop
              className="absolute bottom-0 right-[50%] translate-x-[50%] max-6xl:translate-0 max-10xl:bottom-[5%] max-10xl:right-[2%]"
              style={togetherAnimationStyle}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
