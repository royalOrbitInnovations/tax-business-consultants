"use client";

import Image from "next/image";
import { useState } from "react";

const data = [
  {
    id: 1,
    head: "Extremely Happy",
    text: "Very happy with the services provided. Starting from the beginning all paper work handled with full dedication while maintaining highest standard of professionalism.",
    name: "Passive Pay",
    date: "Aug 2024",
    image: "/images/testimonials-image.webp",
  },
  {
    id: 2,
    head: "Professional Service",
    text: "Exceptional Professional Dealing and Prompt Process Completion which I experienced. One of the best in Qatar",
    name: "Krishnadasan Kombath",
    date: "July 2024",
    image: "/images/services-image-3.webp",
  },
  {
    id: 3,
    head: "Highly Recommended",
    text: "The entire team are extremely helpful, professional and provide a great, friendly quality service. We trust them completely",
    name: "Shereef P I",
    date: "March 2024",
    image: "/images/blog-image.webp",
  },
  {
    id: 4,
    head: "True Professionalist",
    text: "True definition of action speaks louder. They are professional and supportive.",
    name: "Cute Sisters",
    date: "Aug 2024",
    image: "/images/services-image-2.webp",
  },
  {
    id: 5,
    head: "Fast",
    text: "Prompt service with elegant knowledge and more over affordable charges comparing to other service providers",
    name: "Shahul Sahil",
    date: "April 2024",
    image: "/images/post-image-1.webp",
  },
];

export default function Reviews() {
  // 1-based index
  const [current, setCurrent] = useState(1);
  // Which direction are we moving: 'left' or 'right'?
  const [direction, setDirection] = useState("left");

  const item = data[current - 1];

  // Functions to change slide & direction
  function handlePrev() {
    setDirection("right");
    setCurrent((prev) => (prev === 1 ? data.length : prev - 1));
  }
  function handleNext() {
    setDirection("left");
    setCurrent((prev) => (prev === data.length ? 1 : prev + 1));
  }

  // Tailwind animation classes
  const imageAnimation =
    direction === "left"
      ? "animate-carouselSlideInLeft"
      : "animate-carouselSlideInRight";
  const textAnimation =
    direction === "left"
      ? "animate-textSlideInLeft"
      : "animate-textSlideInRight";

  //    ─────────────────────────────────────────────
  //    NOTE: We put a key on a parent <div> that wraps
  //    our entire animated content, so that each time
  //    `current` or `direction` changes, React unmounts
  //    and remounts this <div>—thus re-triggering the
  //    Tailwind animations.
  //    ─────────────────────────────────────────────

  return (
    <div
      key={`${current}-${direction}`}
      className="flex w-full relative"
      style={{ fontFamily: "var(--font-secondary)" }}
    >
      {/* IMAGE */}
      <div className={`relative h-[30rem] w-[30%] ${imageAnimation}`}>
        <Image
          src={item.image}
          alt="testimonials"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* TEXT SECTION */}
      <div
        className={`relative bg-(--ui-light) py-[6rem] max-14xl:py-[4rem] px-[10rem] 
                    max-14xl:px-[7.5rem] max-6xl:px-[3rem] h-[30rem] w-[70%] transition-all duration-300
                    ${textAnimation}`}
      >
        <h3 className="text-(--ui-dark) text-5xl font-bold">{item.head}</h3>
        <p className="text-3xl mt-[3rem] w-[70%] max-14xl:w-[90%]">
          {item.text}
        </p>
        <p className="text-2xl mt-[3rem] font-bold">{item.name}</p>
        <p>{item.date}</p>

        {/* ARROWS & PAGE INDICATOR */}
        <div
          className="flex justify-around items-center w-[22rem] bg-white py-[1rem] 
                     rounded-full absolute right-[10rem] bottom-[5rem] 
                     max-14xl:bottom-[3rem] max-14xl:right-[5rem]"
        >
          <span className="text-2xl">{`${current} / ${data.length}`}</span>
          <div className="flex gap-[1rem] justify-center">
            <img
              src="/svg/arrow-left.svg"
              alt="arrow left"
              onClick={handlePrev}
              className="cursor-pointer h-[3rem] w-[3rem] 
                         hover:bg-(--ui-light)/20 rounded-full p-1 
                         hover:scale-115 transition-all duration-300"
            />
            <img
              src="/svg/arrow-right.svg"
              alt="arrow right"
              onClick={handleNext}
              className="cursor-pointer h-[3rem] w-[3rem] 
                         hover:bg-(--ui-light)/20 rounded-full p-1 
                         hover:scale-115 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
