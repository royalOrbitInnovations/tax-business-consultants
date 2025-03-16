import Image from "next/image";
import FooterSocials from "./FooterSocials";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";

const data = {
  set1: {
    name: "Quick Links",
    links: [
      { name: "Home", link: "/" },
      { name: "About Us", link: "/about-us" },
      { name: "Blog", link: "/blog" },
      { name: "Contact Us", link: "/contact-us" },
      { name: "Services", link: "/services" },
    ],
  },
  set2: {
    name: "Our Services",
    links: [
      {
        name: "Ownership Buisness",
        link: "/services/100-ownership-business-in-qatar",
      },
      {
        name: "Company Formation",
        link: "/services/company-formation-in-qatar",
      },
      { name: "PRO Services", link: "/services/pro-services-in-qatar" },
      {
        name: "Business Consultancy",
        link: "/services/business-consultancy-services",
      },
      { name: "Local Sponsorships", link: "/services/local-sponsorships" },
      { name: "Documents Attestaion", link: "/services/document-attestation" },
    ],
  },
};

export default function Footer() {
  return (
    <div
      className="relative bg-black px-[10rem] max-14xl:px-[10rem] max-10xl:px-[5rem] max-6xl:px-[1rem] py-[5rem] text-white grid grid-cols-5 max-10xl:grid-cols-2 max-10xl:grid-auto-rows overflow-hidden max-14xl:gap-[3rem] max-10xl:items-start"
      style={{ fontFamily: "var(--font-secondary)" }}
    >
      <div className="w-[22rem] flex flex-col gap-[2rem] max-14xl:gap-[1rem] max-14xl:my-auto max-10xl:mx-auto max-10xl:row-start-3">
        <div className="relative h-[8rem] w-[20rem] max-10xl:h-[6rem] max-10xl:w-[15rem]">
          <Image
            fill
            src="/images/logo-footer-tax-business-consultants.webp"
            alt="Footer-logo"
            className="object-cover"
          />
        </div>
        <p className="text-2xl max-10xl:text-xl">
          Get innovative solutions for business growth. Your business&apos;s
          path to success starts with our solutions and expert guidance.
        </p>

        <FooterSocials />
      </div>

      {Object.values(data).map((section, index) => (
        <FooterLinks section={section} key={index} />
      ))}

      <div className="mt-[4rem] max-15xl:hidden">
        <h3 className="text-5xl font-bold mb-4 ">Get In Touch</h3>
        <p className="text-2xl">
          Hub Business Center <br /> 4th Floor, Royal Plaza <br /> Al Sadd,
          Qatar
        </p>
      </div>

      <FooterContact />
      <h2 className="absolute text-[10rem] max-14xl:text-[8rem] max-7xl:text-[5rem] text-white/20 bottom-[-25%] max-10xl:bottom-[-20%] max-7xl:bottom-[-5%]  w-[100%] text-center">
        Tax Business Consultants
      </h2>
    </div>
  );
}
