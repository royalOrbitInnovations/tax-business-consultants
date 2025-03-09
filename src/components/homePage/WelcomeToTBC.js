import Link from "next/link";
import TextWithBorder from "../TextWithBorder";
import Image from "next/image";
import CountUpOnView from "../CountUpOnView";

export default function WelcomeToTBC() {
  return (
    <div className="relative bg-black text-white mt-[7rem] pl-[20rem] max-14xl:pl-[15rem] max-6xl:px-[5rem] pt-[10rem] flex flex-col gap-[2rem] h-[70vh] max-16xl:h-[80vh] max-12xl:h-[60vh] max-10xl:h-[70vh] max-6xl:h-[80vh] max-5xl:h-[60vh]">
      <TextWithBorder text="Welcome To Tax Business Consultant" />
      <h2 className="text-[4rem]">
        Business Advisory Consulting Firm in Qatar
      </h2>
      <p className="text-[2.2rem] w-[50%] max-14xl:w-[70%] max-6xl:w-[100%] max-6xl:text-justify">
        Providing professional consulting services to businesses in various
        industries by offering expert advice and guidance to help businesses
        overcome challenges, optimize operations, and ultimately achieve their
        goals. Our business consulting services are designed to meet these needs
        effectively.
      </p>
      <Link
        href="/about-us"
        className="flex items-center gap-[1rem] absolute top-[10rem] right-[20rem] text-2xl hover:scale-110 transition-all duration-300 hover:font-bold max-10xl:relative max-10xl:top-0 max-10xl:right-0"
      >
        More About Us
        <img
          src="/svg/arrorw-top-right-tax-business-consultants.svg"
          className="h-[2rem]"
        />
      </Link>

      <div className="absolute top-[45rem] max-10xl:top-[50rem] h-[70rem] max-16xl:h-[50rem] max-5xl:top-[60rem] w-[80%] max-16xl:w-[70%] max-10xl:w-[80%] max-6xl:w-[90%] rounded-[25px] overflow-hidden shadow-xl hover:scale-102 transition-all duration-300 right-[50%] translate-x-[50%]">
        <Image
          src="/images/services-banner-image.webp"
          alt="WTTBC Business People Walking"
          fill
          className="object-cover object-center"
        />
        <div className="absolute  h-[10rem] w-fit bottom-[5rem] left-[5rem] flex gap-[1rem] items-center">
          <img
            src="/svg/wttbc.svg"
            className="relative z-1000 max-5xl:h-[10rem] max-5xl:w-[10rem]"
          />
          <div className="flex flex-col gap-[1rem]">
            <span className="text-7xl font-bold flex">
              <CountUpOnView end="90" duration="3" />%
            </span>
            <span className="text-5xl font-bold">Positive Impression</span>
          </div>
        </div>
      </div>
    </div>
  );
}
