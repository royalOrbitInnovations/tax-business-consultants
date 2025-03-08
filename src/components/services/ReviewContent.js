"use client";

import Image from "next/image";
import { useState } from "react";

const data = [
  {
    image: "/images/services-review-5.jpg",
    head: "Excellent Auditing",
    name: "Sajna Koya",
    review:
      "Excellent auditing firm. mashallah got a trusted firm n reliable information",
    position: "Google Reviewer",
  },
  {
    image: "/images/services-review-4.jpg",
    head: "Awesome Service",
    name: "Fawaz Mohamed",
    review:
      "Very professional to work with and have an in-depth knowledge of local tax laws.",
    position: "Google Reviewer",
  },
  {
    image: "/images/services-review-3.jpg",
    head: "Best Out There!",
    name: "Janneh Ibrahim",
    review:
      "True definition of action speaks louder. They are professional and supportive.",
    position: "Google Reviewer",
  },
  {
    image: "/images/services-review-2.jpg",
    head: "Very Professional",
    name: "Sanooj Syed Muhammed",
    review:
      "Professional staffs and really helped our company to handle our tax related filing and all, highly recommended, thanks a lot guys, keep up the good work",
    position: "Google Reviewer",
  },
  {
    image: "/images/services-review-1.png",
    head: "Highly Resourceful",
    name: "Shameem Mailanchi",
    review:
      "Professional team. Well versed in all kind auditing and business consulting matters. Happy to be their customer.",
    position: "Google Reviewer",
  },
];

export default function ReviewContent() {
  const [current, setCurrent] = useState(4);
  const item = data[current - 1];
  return (
    <div className="absolute top-[50%] translate-y-[-50%] pl-[20rem] flex gap-[2rem] items-center">
      <div className="relative h-[40vh] w-[20vw] rounded-[25px] overflow-hidden">
        <Image
          src={item.image}
          alt="services-review-image"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-[60%]">
        <h2 className="text-(--ui-dark) text-3xl">{item.head}</h2>
        <p className="text-6xl py-[3rem]">{item.review}</p>
        <p className="text-4xl font-bold">{item.name}</p>
        <p className="text-lg">{item.position}</p>
      </div>

      <div className="absolute bottom-0 right-[20%] flex gap-[1rem] justify-center">
        <img
          src="/svg/arrow-left.svg"
          className="cursor-pointer  h-[3rem] w-[3rem]"
          alt="arrow left"
          onClick={() => {
            {
              current < data.length ? setCurrent(current + 1) : setCurrent(1);
            }
          }}
        />
        <img
          src="/svg/arrow-right.svg"
          className="cursor-pointer h-[3rem] w-[3rem]"
          alt="Arrow Right"
          onClick={() => {
            current < data.length ? setCurrent(current + 1) : setCurrent(1);
          }}
        />
      </div>
    </div>
  );
}
