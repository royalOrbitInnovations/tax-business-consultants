import Link from "next/link";
import TextWithBorder from "../TextWithBorder";
import Image from "next/image";

export default function WelcomeToTBC() {
  return (
    <div className="relative bg-black text-white mt-[7rem] pl-[20rem] pt-[10rem] flex flex-col gap-[2rem] h-[70vh]">
      <TextWithBorder text="Welcome To Tax Business Consultant" />
      <h2 className="text-[4rem]">
        Business Advisory Consulting Firm in Qatar
      </h2>
      <p className="text-[2.2rem] w-[50%]">
        Providing professional consulting services to businesses in various
        industries by offering expert advice and guidance to help businesses
        overcome challenges, optimize operations, and ultimately achieve their
        goals. Our business consulting services are designed to meet these needs
        effectively.
      </p>
      <Link
        href="/about-us"
        className="flex items-center gap-[1rem] absolute top-[10rem] right-[20rem] text-2xl hover:scale-110 transition-all duration-300 hover:font-bold"
      >
        More About Us
        <img
          src="/svg/arrorw-top-right-tax-business-consultants.svg"
          className="h-[2rem]"
        />
      </Link>

      <div className="absolute top-[45rem] h-[70rem] w-[80%] rounded-[25px] overflow-hidden shadow-xl hover:scale-102 transition-all duration-300">
        <Image
          src="/images/WTTBC.png"
          alt="WTTBC Business People Walking"
          fill
          className="object-cover "
        />
        <div className="absolute  h-[10rem] w-fit bottom-[5rem] left-[5rem] flex gap-[1rem] items-center">
          <img src="/svg/wttbc.svg" className="relative z-1000" />
          <div className="flex flex-col gap-[1rem]">
            <span className="text-7xl font-bold">90%</span>
            <span className="text-5xl font-bold">Positive Impression</span>
          </div>
        </div>
      </div>
    </div>
  );
}
