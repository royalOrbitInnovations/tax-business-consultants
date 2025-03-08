import Link from "next/link";
import TextWithBorder from "../TextWithBorder";
import OurServicesBox from "./OurServicesBox";
import OurServicesList from "./OurServicesList";

export default function OurServices() {
  return (
    <div className="relative pt-[10rem] py-[20rem] px-[20rem] bg-[#EFEAE6]">
      <TextWithBorder text="Our Services" />
      <h2 className="text-[7rem]/30 w-[60%] mt-[3rem]">
        Empowering Business With Strategic Growth Solution
      </h2>
      <OurServicesBox />
      <div className="bg-[#EFEAE6] [clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)] absolute w-[87%] bottom-[-25rem] right-0 h-[40vh]" />
      <div
        className="bg-(--ui-light) [clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)] absolute w-[85%] bottom-[-25rem] b right-0 h-[40vh] pl-[10%] gap-[5rem] flex justify-center items-center"
        style={{ fontFamily: "var(--font-secondary)" }}
      >
        <OurServicesList />
        <Link href="/contact-us">
          <button className="flex justify-center items-center bg-(--ui-dark) text-white px-[2rem] py-[1rem] text-3xl gap-[1rem] hover:scale-110 transition-all duration-300 rounded-lg shadow-xl cursor-pointer">
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
