"use client";

import { useState } from "react";
import ReviewBG from "./ReviewBG";
import ReviewContent from "./ReviewContent";

export default function ServicesReview() {
  const [width, setWidth] = useState(0);

  return (
    <div
      className={`relative px-[20rem] max-14xl:px-[15rem] max-10xl:px-[10rem] max-6xl:px-[5rem] py-[5rem] w-[100vw] overflow-hidden ${
        width < 500 ? "h-[70vh]" : width < 900 ? "h-[80vh]" : "h-[70vh]"
      }`}
    >
      <ReviewBG />
      <ReviewContent width={width} />
    </div>
  );
}
