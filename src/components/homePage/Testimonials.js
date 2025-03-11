import Image from "next/image";
import TextWithBorder from "../TextWithBorder";
import Reviews from "./Reviews";

export default function Testimonials() {
  return (
    <div className="py-[10rem] px-[20rem] max-14xl:px-[15rem] max-10xl:px-[10rem] max-6xl:px-[5rem] max-5xl:px-0 ">
      <div className="max-5xl:px-[5rem]">
        <TextWithBorder text="Testimonials" />
      </div>
      <div className="flex mt-[8rem] max-14xl:mt-[6rem] justify-around w-[100%] rounded-[50px] max-5xl:rounded-sm overflow-hidden shadow-2xl border-2 border-(--ui-dark) max-6xl:rounded-[20px]">
        <Reviews />
      </div>
    </div>
  );
}
