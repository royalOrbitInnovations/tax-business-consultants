"use client";

import { useState } from "react";

const data = [
  {
    id: 1,
    head: "Extremely Happy",
    text: "Very happy with the services provided. Starting from the beginning all paper work handled with full dedication while maintaining highest standard of professionalism.",
    name: "Passive Pay",
    date: "Aug 2024",
  },
  {
    id: 2,
    head: "Professional Service",
    text: "Exceptional Professional Dealing and Prompt Process Completion which I experienced. One of the best in Qatar",
    name: "Krishnadasan Kombath",
    date: "July 2024",
  },
  {
    id: 3,
    head: "Highly Recommended",
    text: "The entire team are extremely helpful, professional and provide a great, friendly quality service. We trust them completely",
    name: "Shereef P I",
    date: "March 2024",
  },
  {
    id: 4,
    head: "True Professionalist",
    text: "True definition of action speaks louder. They are professional and supportive.",
    name: "Cute Sisters",
    date: "Aug 2024",
  },
  {
    id: 5,
    head: "Fast",
    text: "Prompt service with elegant knowledge and more over affordable charges comparing to other service providers",
    name: "Shahul Sahil",
    date: "April 2024",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(1);
  const item = data[current - 1];

  return (
    <div
      className="relative bg-(--ui-light) py-[6rem] max-14xl:py-[4rem] px-[10rem] max-14xl:px-[7.5rem] h-[30rem] w-[70%]"
      style={{ fontFamily: "var(--font-secondary)" }}
    >
      <h3 className="text-(--ui-dark) text-5xl font-bold">{item.head}</h3>
      <p className="text-3xl mt-[3rem] w-[70%] max-14xl:w-[90%]">{item.text}</p>
      <p className="text-2xl mt-[3rem] font-bold">{item.name}</p>
      <p>{item.date}</p>
      <div className="flex justify-around w-[22rem] bg-white py-[1rem] rounded-full absolute right-[10rem] bottom-[5rem] max-14xl:bottom-[3rem] max-14xl:right-[5rem]">
        <span className="text-2xl">{`${current} / ${data.length}`}</span>
        <div className="flex gap-[1rem] justify-center">
          <img
            src="/svg/arrow-left.svg"
            alt="arrow left"
            onClick={() => {
              {
                current < data.length ? setCurrent(current + 1) : setCurrent(1);
              }
            }}
          />
          <img
            src="/svg/arrow-right.svg"
            alt="Arrow Right"
            onClick={() => {
              current < data.length ? setCurrent(current + 1) : setCurrent(1);
            }}
          />
        </div>
      </div>
    </div>
  );
}
