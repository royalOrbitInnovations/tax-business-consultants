"use client";

import Image from "next/image";
import QuestionBox from "./QuestionBox";
import { useState } from "react";

export default function ServiceBox({ heading, questionSet, image, index }) {
  const [width, setWindowWidth] = useState(window.innerWidth);

  return (
    <div className="px-[20rem] max-10xl:px-[15rem] max-6xl:px-[10rem] max-5xl:px-[5rem] pt-[5rem] pb-[2rem] flex max-9xl:flex-col  gap-[2rem]">
      {width > 900 ? (
        <>
          {index % 2 === 0
            ? imageDiv(image)
            : questionDiv(heading, questionSet)}
          {index % 2 === 0
            ? questionDiv(heading, questionSet)
            : imageDiv(image)}
        </>
      ) : (
        <>
          {imageDiv(image)}
          {questionDiv(heading, questionSet)}
        </>
      )}
    </div>
  );
}

function imageDiv(image) {
  return (
    <div className="relative h-[30rem] w-[30%] max-9xl:w-[100%] rounded-2xl overflow-hidden self-center">
      <Image
        src={image}
        alt="services-image-1"
        fill
        className="object-cover hover:scale-110 transition-all duration-500"
      />
    </div>
  );
}

function questionDiv(heading, questionSet) {
  return (
    <div className="grow">
      <h2 className="flex w-full bg-(--ui-light) h-[5rem] items-center text-[2.6rem] px-[2rem] py-[1rem] mb-[2rem] rounded-2xl font-bold max-4xl:font-normal">
        <img
          src="/svg/arrow-fill.svg"
          alt="Arrow"
          className="h-[3rem] w-[3rem]"
        />
        {heading}
      </h2>
      <QuestionBox questionSet={questionSet} />
    </div>
  );
}
