"use client";

import Image from "next/image";
import { useState } from "react";

const data = [
  {
    image: "/images/services-review-5.webp",
    head: "Excellent Auditing",
    name: "Sajna Koya",
    review:
      "Excellent auditing firm. mashallah got a trusted firm n reliable information",
    position: "Google Reviewer",
  },
  {
    image: "/images/services-review-4.webp",
    head: "Awesome Service",
    name: "Fawaz Mohamed",
    review:
      "Very professional to work with and have an in-depth knowledge of local tax laws.",
    position: "Google Reviewer",
  },
  {
    image: "/images/services-review-3.webp",
    head: "Best Out There!",
    name: "Janneh Ibrahim",
    review:
      "True definition of action speaks louder. They are professional and supportive.",
    position: "Google Reviewer",
  },
  {
    image: "/images/services-review-2.webp",
    head: "Very Professional",
    name: "Sanooj Syed Muhammed",
    review:
      "Professional staffs and really helped our company to handle our tax related filing and all, highly recommended, thanks a lot guys, keep up the good work",
    position: "Google Reviewer",
  },
  {
    image: "/images/services-review-1.webp",
    head: "Highly Resourceful",
    name: "Shameem Mailanchi",
    review:
      "Professional team. Well versed in all kind auditing and business consulting matters. Happy to be their customer.",
    position: "Google Reviewer",
  },
];

export default function ReviewContent() {
  // current holds a value between 1 and data.length
  const [current, setCurrent] = useState(4);
  // direction to determine animation: "left" for previous, "right" for next
  const [direction, setDirection] = useState("right");
  const item = data[current - 1];

  const handlePrev = () => {
    setDirection("right");
    setCurrent(current === 1 ? data.length : current - 1);
  };

  const handleNext = () => {
    setDirection("left");
    setCurrent(current === data.length ? 1 : current + 1);
  };

  return (
    <div className="absolute top-1/2 translate-y-[-50%] px-[10rem] max-9xl:px-[2rem] flex gap-[2rem] items-center w-full">
      <AnimatedReview item={item} direction={direction} key={current} />
      <div className="absolute bottom-0 right-[30%] flex gap-[1rem] justify-center">
        <img
          src="/svg/arrow-left.svg"
          className="cursor-pointer h-[3rem] w-[3rem] hover:bg-(--ui-light)/20 rounded-full p-1 hover:scale-115 transition-all duration-300"
          alt="arrow left"
          onClick={handlePrev}
        />
        <img
          src="/svg/arrow-right.svg"
          className="cursor-pointer h-[3rem] w-[3rem] hover:bg-(--ui-light)/20 rounded-full p-1 hover:scale-115 transition-all duration-300"
          alt="arrow right"
          onClick={handleNext}
        />
      </div>
    </div>
  );
}

function AnimatedReview({ item, direction }) {
  const imageAnimation =
    direction === "left"
      ? "animate-carouselSlideInLeft"
      : "animate-carouselSlideInRight";
  const textAnimation =
    direction === "left"
      ? "animate-textSlideInLeft"
      : "animate-textSlideInRight";

  return (
    <div className="flex max-9xl:flex-col gap-[2rem] items-center w-[80%]">
      <div
        className={`relative h-[40vh] w-[20vw] max-9xl:w-[100%] max-9xl:h-[30vh] rounded-[25px] overflow-hidden ${imageAnimation}`}
      >
        <Image
          src={item.image}
          alt="services-review-image"
          fill
          className="object-cover hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className={`w-[60%] max-9xl:w-full ${textAnimation}`}>
        <h2 className="text-(--ui-dark) text-3xl">{item.head}</h2>
        <p className="text-5xl py-[3rem] max-6xl:text-4xl max-6xl:py-[2rem]">
          {item.review}
        </p>
        <p className="text-4xl font-bold max-6xl:text-3xl">{item.name}</p>
        <p className="text-lg">{item.position}</p>
      </div>
    </div>
  );
}
