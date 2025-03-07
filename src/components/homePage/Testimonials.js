import Image from "next/image";
import TextWithBorder from "../TextWithBorder";
import Reviews from "./Reviews";

export default function Testimonials() {
  return (
    <div className="py-[10rem] px-[20rem]">
      <TextWithBorder text="Testimonials" />
      <div className="flex mt-[8rem] justify-around w-[100%] rounded-[50px] overflow-hidden shadow-2xl">
        <div className="relative h-[30rem] w-[30%] ">
          <Image
            src="/images/testimonials-image.png"
            alt="testimonials"
            fill
            className="object-cover object-top"
          />
        </div>
        <Reviews />
      </div>
    </div>
  );
}
