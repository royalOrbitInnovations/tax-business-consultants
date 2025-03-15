"use client";

import dynamic from "next/dynamic";
import arrowAnimation from "../../animations/arrow-right.json";
import Link from "next/link";
import { useEffect, useState } from "react";

// Dynamically import Lottie so that it's only loaded on the client.
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Data for business steps.
const data = [
  {
    step: "Choose business activity",
    description:
      "Identify your business activity and ensure it complies with Qatar’s legal and regulatory framework for seamless registration.",
  },
  {
    step: "Choose a legal structure",
    description:
      "Select the most suitable legal structure, such as an LLC or branch office, to align with your business objectives and regulatory requirements.",
  },
  {
    step: "Obtain initial approvals",
    description:
      "Secure necessary approvals from relevant government entities to proceed with registration and licensing effortlessly.",
  },
  {
    step: "Register the company",
    description:
      "Complete the official registration process with the Ministry of Commerce and Industry by submitting essential documentation.",
  },
  {
    step: "Obtain residence & work permits",
    description:
      "Facilitate work and residence permits for foreign employees to ensure smooth workforce integration and legal compliance.",
  },
  {
    step: "Obtain commercial registration",
    description:
      "Acquire the mandatory commercial registration certificate to legally operate your business in Qatar.",
  },
  {
    step: "Open a corporate bank account",
    description:
      "Establish a corporate bank account to enable financial transactions and support business operations efficiently.",
  },
  {
    step: "Start business operations",
    description:
      "Once all approvals and registrations are in place, launch your business operations with confidence and compliance.",
  },
];

export default function BusinessProcess() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function getScreenWidth() {
      setWidth(window.innerWidth);
    }
    getScreenWidth();
  }, []);
  return (
    <div className="px-[5rem] pb-[10rem] pt-[6rem] flex flex-col justify-center gap-[5rem] ">
      <h2 className="text-8xl text-center">
        The Process of Company Formation in Qatar
      </h2>
      <div className="grid grid-cols-3 justify-items-center gap-[2rem] max-10xl:grid-cols-2 max-6xl:grid-cols-1">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative border w-[80%] h-[100%] px-[5rem] py-[5rem] flex flex-col justify-center items-center gap-[2rem] rounded-[25px] bg-[#EFEAE6] text-(--ui-dark) hover:rotate-4 hover:scale-105 transition-all duration-300 shadow-xl max-16xl:gap-[1rem] max-16xl:px-[2rem] max-6xl:w-[100%]"
          >
            <p className="absolute text-[10rem]  text-(--ui-dark)/20 top-[-2rem] right-5">
              {index + 1}
            </p>
            <h2 className="text-5xl">{item.step}</h2>
            <p className="text-3xl">{item.description}</p>
            {(index + 1) % 3 !== 0 && (
              <Lottie
                animationData={arrowAnimation}
                className="max-10xl:hidden"
                loop={true}
                style={{
                  width: "100px",
                  height: "50px",
                  position: "absolute",
                  top: "50%",
                  right: "-100px",
                  transform: "translateY(-50%)",
                  zIndex: "100",
                }}
              />
            )}
          </div>
        ))}
        <div className="relative border w-[80%] px-[2rem] py-[3rem] flex flex-col gap-[2rem] justify-center items-center rounded-[25px] shadow-2xl hover:scale-105 hover:rotate-4 transition-all duration-300  max-6xl:w-[100%]">
          <h2 className="text-5xl">Let&apos;s Get Started</h2>
          <button className="bg-(--ui-dark) text-white text-[2rem] px-[5rem] py-[2rem] rounded-full">
            <Link href="/contact-us">Get a Quote</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
