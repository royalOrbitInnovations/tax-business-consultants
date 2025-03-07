import Image from "next/image";
import TextWithBorder from "../TextWithBorder";

export default function Blog() {
  return (
    <div className="mt-[30rem] px-[20rem]">
      <TextWithBorder text="Blog" />
      <div className=" flex items-center">
        <div className="flex flex-col gap-[2rem] mt-[4rem] w-[100%]">
          <h2 className="text-[5rem]/20  w-[70%]">
            Get the coverage you need for your business, family, and assets.
          </h2>
          <p className="text-4xl w-[80%] mt-[2rem]">
            We are confident in our ability to offer cutting-edge solutions that
            empower both businesses and individuals to thrive in the constantly
            evolving landscape of today's world. Crafted to simplify operations,
            enhance efficiency, and boost productivity, our solutions are
            tailored to streamline business processes and drive success.
          </p>
        </div>
        <div className="relative h-[30rem] w-[80rem]">
          <Image
            src="/images/blog-image.png"
            fill
            className="object-cover"
            alt="Blog-Image"
          />
        </div>
      </div>
    </div>
  );
}
