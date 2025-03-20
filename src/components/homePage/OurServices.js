import Link from "next/link";
import TextWithBorder from "../TextWithBorder";
import OurServicesBox from "./OurServicesBox";
import OurServicesList from "./OurServicesList";

export default function OurServices() {
  return (
    <div className="relative pt-[10rem] py-[20rem] max-5xl:py-[10rem] max-14xl:px-[15rem] px-[20rem] max-6xl:px-[5rem] bg-[#EFEAE6] max-5xl:overflow-hidden mb-[30rem] max-5xl:mb-[10rem] max-14xl:mb-[35rem] max-10xl:mb-[30rem] max-6xl:mb-[45rem]">
      <TextWithBorder text="Our Services" />
      <h2 className="text-[7rem]/30 max-5xl:text-[5rem] w-[60%] max-16xl:w-[80%] max-10xl:w-[90%] max-6xl:w-[100%] mt-[3rem]">
        Empowering Business With Strategic Growth Solution
      </h2>
      <OurServicesBox />
      <div className="bg-[#EFEAE6] [clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)] max-5xl:hidden absolute w-[87%] max-6xl:w-[94%] bottom-[-35rem] max-16xl:bottom-[-26rem]  max-7xl:bottom-[-40rem] max-6xl:bottom-[-48rem] right-0 h-[40vh] max-12xl:h-[30vh] max-6xl:h-[50vh] " />
      <div
        className="bg-(--ui-light) [clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)] max-5xl:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] absolute max-5xl:relative w-[85%] max-6xl:w-[92%]  max-5xl:w-[100%] bottom-[-35rem] max-16xl:bottom-[-26rem]  max-7xl:bottom-[-40rem] max-6xl:bottom-[-48rem] max-5xl:bottom-0 right-0 h-[40vh] max-12xl:h-[30vh] max-6xl:h-[50vh] pl-[10%] max-5xl:pl-0 gap-[5rem]  flex max-6xl:flex-col justify-center items-center max-5xl:mt-[2rem]"
        style={{ fontFamily: "var(--font-secondary)" }}
      >
        <OurServicesList />
        <Link href="/contact-us">
          <button className=" flex justify-center items-center bg-(--ui-dark) text-white px-[2rem] py-[1rem] text-3xl gap-[1rem] hover:scale-110 transition-all duration-300 rounded-lg shadow-xl cursor-pointer ">
            Make an Appointment
            <img
              src="/svg/arrorw-top-right-tax-business-consultants.svg"
              alt="arrow top right"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
