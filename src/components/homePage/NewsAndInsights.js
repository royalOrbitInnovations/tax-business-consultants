"use client";

import Link from "next/link";
import TextWithBorder from "../TextWithBorder";
import dynamic from "next/dynamic";

const PostsSection = dynamic(() => import("./PostsSection"), {
  ssr: false,
});

export default function NewsAndInsights() {
  return (
    <div className="mt-[10rem] px-[20rem] max-14xl:px-[15rem] max-6xl:px-[5rem] relative">
      <TextWithBorder text="News & Insight" />
      <h2 className="text-[6rem]/25 max-10xl:text-[5rem] w-[60%] max-14xl:w-[80%] max-10xl:w-[90%] max-5xl:w-[100%] mt-[4rem]">
        The Latest News and Insights in the field of Tax Busines Consultant
      </h2>
      <Link href="/blog">
        <button className="flex items-center text-4xl border border-(--ui-dark) rounded-[50px] px-[2rem] py-[.5rem] absolute right-[20rem] max-10xl:relative max-10xl:right-0 max-10xl:mt-[3rem] hover:sclae-110 hover:bg-(--ui-dark) hover:text-white transition-all duration-300 cursor-pointer">
          Explore More
          <img
            src="/svg/arrorw-top-right-tax-business-consultants.svg"
            alt="Aroow"
          />
        </button>
      </Link>
      <hr className="mt-[7rem] max-10xl:mt-[3rem] border-t-2 border-gray-200" />
      <PostsSection />
    </div>
  );
}
