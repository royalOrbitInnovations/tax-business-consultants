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
      "Decide on the type of business activity you want to undertake and ensure that it is permissible under Qatar's laws and regulations.",
  },
  {
    step: "Choose a legal structure",
    description:
      "Decide on the type of legal structure for your business, such as a limited liability company (LLC), branch office, or representative office.",
  },
  {
    step: "Obtain initial approvals",
    description:
      "Depending on the type of business, you may need to obtain approvals from various government agencies, such as the Ministry of Commerce and Industry, the Ministry of Economy and Commerce, or the Qatar Financial Center.",
  },
  {
    step: "Register the company",
    description:
      "Once you have obtained initial approvals, you will need to register your company with the Ministry of Commerce and Industry. You will need to provide documents such as the company's articles of association, a list of shareholders, and proof of address.",
  },
  {
    step: "Obtain residence & work permits",
    description:
      "If you are planning to bring in foreign employees, you will need to obtain work and residence permits for them.",
  },
  {
    step: "Obtain commercial registration",
    description:
      "This step is necessary for all types of businesses operating in Qatar. You will need to provide documents such as the company's registration certificate, a list of shareholders, and proof of address.",
  },
  {
    step: "Open a corporate bank account",
    description:
      "Once your business is registered, you will need to open a corporate bank account in order to start operations.",
  },
  {
    step: "Start business operations",
    description:
      "Once all the necessary approvals, licenses, and permits have been obtained, you can start your business operations.",
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
