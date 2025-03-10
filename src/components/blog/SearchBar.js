"use client";

import dynamic from "next/dynamic";
import animationData from "../../animations/search.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function SearchBar() {
  return (
    <div className="px-[20rem] pt-[5rem] flex items-center justify-between max-10xl:px-[15rem] max-9xl:flex-col">
      <h2 className="text-8xl font-bold text-(--ui-dark) max-6xl:text-6xl">
        Blog Posts
      </h2>
      <div className="flex justify-end items-center gap-[1rem]">
        <input
          placeholder="Search for posts"
          type="text"
          className="border border-2 border-(--ui-light) w-[20vw] h-[5rem] p-[2rem] rounded-full text-2xl focus:outline focus:outline-offset-2 focus:outline-(--ui-dark) transition-all duration-300 max-15xl:w-[40rem] "
        />
        <div
          className="w-[10rem] h-[10rem] flex justify-center items-center hover:scale-110 transition-all duration-300 cursor-pointer"
          onClick=""
        >
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </div>
  );
}
