import Link from "next/link";
import ButtonUI from "../ButtonUI";

export default function CarouselOverlayText() {
  return (
    <div className="absolute top-[55%] translate-y-[-50%] left-[10%] flex flex-col gap-[4rem] tracking-widest ">
      <h1 className="text-[7rem]/30 w-[50%]">
        <span className="text-(--ui-dark)">Tax Business consultant</span> is a
        professional service provided by individuals or firms
      </h1>
      <div className="flex gap-[1.5rem] w-[40%] border-b border-gray-400 pb-[2rem]">
        <img
          src="/svg/arrorw-top-right-tax-business-consultants.svg"
          alt="Arrow SVG"
          className=" h-[5rem] w-[5rem]"
        />
        <p className="text-[2rem]/10 ">
          Current business operations, identify areas of improvement, and
          develop strategies amd solutions to addess.
        </p>
      </div>
      {/* <hr className="bg-[--ui-dark]" /> */}
      <Link href="/services" className="z-100">
        <ButtonUI width="25rem" size="2.2rem" paddingY="1.8rem">
          Explore More
          <img
            src="/svg/arrorw-top-right-tax-business-consultants.svg"
            alt="Arrow SVG"
            className="bg-white rounded-[50%] h-[2rem] w-[2rem] hover:scale-105 transition-all duration-300"
          />
        </ButtonUI>
      </Link>
    </div>
  );
}
