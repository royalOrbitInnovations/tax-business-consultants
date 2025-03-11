import Image from "next/image";
import TextWithBorder from "../TextWithBorder";

export default function Blog() {
  return (
    <div className="px-[20rem] max-14xl:px-[15rem] max-6xl:px-[5rem]">
      <TextWithBorder text="Blog" />
      <div className=" flex  max-10xl:grid max-10xl:grid-cols-1 items-center">
        <div className="flex flex-col gap-[2rem] mt-[4rem] w-[100%]">
          <h2 className="text-[5rem]/20  w-[70%] max-10xl:w-[100%] max-10xl:text-center max-6xl:text-left">
            Get the coverage you need for your business, family, and assets.
          </h2>
          <p className="text-4xl w-[80%] mt-[2rem] max-10xl:w-[100%]">
            We are confident in our ability to offer cutting-edge solutions that
            empower both businesses and individuals to thrive in the constantly
            evolving landscape of today&apos;s world. Crafted to simplify
            operations, enhance efficiency, and boost productivity, our
            solutions are tailored to streamline business processes and drive
            success.
          </p>
        </div>
        <div className="relative max-10xl:row-start-1 max-10xl:mx-auto max-10xl:mt-[3rem] h-[30rem] w-[80rem] max-8xl:w-[100%] rounded-[10px] overflow-hidden shadow-2xl">
          <Image
            src="/images/blog-image.webp"
            fill
            className="object-cover object-top hover:scale-120 transition-all duration-700"
            alt="Blog-Image"
          />
        </div>
      </div>
    </div>
  );
}
