import Image from "next/image";
import Link from "next/link";

const data = [
  {
    image: "/svg/percentage.svg",
    head: "100% Ownership Business in Qatar",
    para: "Enjoy full business ownership in Qatar with a streamlined setup process, ensuring complete control and operational flexibility.",
  },
  {
    image: "/svg/formation.svg",
    head: "Company Formation in Qatar",
    para: "Setting up a company in Qatar is seamless with Tax Business Consultant, offering expert guidance from registration to compliance.",
  },
  {
    image: "/svg/PRO-services.svg",
    head: "PRO Services in Qatar",
    para: "Get hassle-free PRO services, including legal documentation, visa processing, and government approvals for smooth business operations.",
  },
  {
    image: "/svg/consult.svg",
    head: "Business Consultancy Services",
    para: "From company formation to sponsorship and compliance, we provide strategic consulting to optimize your business success in Qatar.",
  },
  {
    image: "/svg/lending-money.svg",
    head: "Local Sponsorship",
    para: "Partner with a trusted Qatari sponsor to fulfill legal requirements while ensuring stability and growth for your business.",
  },
  {
    image: "/svg/document.svg",
    head: "Document Attestation",
    para: "We offer secure and efficient document attestation services in Qatar, ensuring legal validation for business and personal documents.",
  },
];

export default function OurServicesBox() {
  return (
    <div className="grid grid-cols-4 max-10xl:grid-cols-3 max-6xl:grid-cols-2  max-6xl:auto-rows-auto gap-[2rem] max-14xl:gap-[1.5rem] mt-[6rem]">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-(--ui-dark) p-[4rem] max-14xl:p-[2.5rem] rounded-[25px] flex flex-col gap-[1.5rem] text-white justify-center hover:bg-black transition-all duration-300 shadow-2xl"
        >
          <img
            src={item.image}
            alt={item.head}
            className="h-[8rem] w-[8rem] max-14xl:h-[6rem] max-14xl:w-[6rem]"
          />
          <h3 className="text-5xl">{item.head}</h3>
          <p className="text-2xl">{item.para}</p>
        </div>
      ))}
      <div className="relative col-span-2 max-10xl:col-span-3 max-6xl:col-span-2 bg-black rounded-[25px] rounded-tr-[150px] max-10xl:rounded-r-[150px] flex flex-col p-[4rem] max-10xl:px-[8rem] max-10xl:py-[6rem] max-14xl:p-[2.5rem] text-white shadow-2xl overflow-hidden">
        {/* Background image container */}
        <div className="absolute inset-0 z-0 bg-black opacity-50 hover:scale-105 transition-all duration-300">
          <Image
            src="/images/button-bg-qatar.webp"
            alt="Bg-image"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <h3 className="text-5xl relative z-10">Unlock Your</h3>
        <h2 className="text-7xl relative z-10">FULL POTENTIAL</h2>
        <p className="text-5xl relative z-10">We help you achieve the</p>
        <h2 className="text-[10rem] max-16xl:text-[8rem] max-6xl:text-[5rem] relative z-10">
          Extraordinary
        </h2>

        <Link href="/contact-us">
          <button className="flex absolute max-6xl:relative bottom-[15rem] max-16xl:bottom-[4rem] max-10xl:bottom-[50%] max-6xl:bottom-0 max-10xl:translate-y-[50%] right-[8rem] max-6xl:right-0 text-[2rem] items-center gap-[1rem] bg-white text-black px-[1rem] py-[1rem] rounded-[10px] max-6xl:w-[50%] max-6xl:mb-5 hover:scale-110 transition-all duration-300 cursor-pointer z-10">
            Get a Quote
            <img
              src="/svg/arrow-right-tax-business-consultants.svg"
              alt="Right Arrow"
              className="bg-white rounded-[50%] w-[2rem] h-[2rem]"
            />
          </button>
        </Link>
      </div>

      <div></div>
    </div>
  );
}
