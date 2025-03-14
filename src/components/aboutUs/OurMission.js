import Image from "next/image";
import Link from "next/link";

export default function OurMission() {
  return (
    <div className="relative w-[100vw] h-[80vh]">
      <Image
        src="/images/our-mission.webp"
        alt="Our Mission Image"
        fill
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-black opacity-50 hover:opacity-55 transition-all duration-300 max-6xl:opacity-70" />
      <div className="absolute z-100 text-white px-[20rem] top-[50%] translate-y-[-50%] max-10xl:px-[10rem] max-5xl:px-[5rem]">
        <h2 className="text-8xl font-bold mb-[10rem] hover:tracking-widest transition-all duration-300 max-6xl:mb-[5rem]">
          Our Mission
        </h2>
        <p className="text-5xl w-[50%] mb-[5rem] hover:text-(--ui-light) transition-all duration-300 max-6xl:w-[100%]">
          To empower organizations to thrive and achieve their full potential by
          providing strategic insights, innovative solutions, and expert
          guidance. We partner with our clientsto enhance efficiency,
          competitiveness, and sustainability in an ever-evolving business
          landscape.
        </p>
        <Link href="/blog">
          <span className="flex items-center text-3xl gap-[1rem] hover:gap-[2rem] transition-all duration-300 cursor-pointer">
            Read More
            <img
              src="/svg/arrow-down.svg"
              alt="arrow-down"
              className="rotate-270"
            />
          </span>
        </Link>
      </div>
    </div>
  );
}
