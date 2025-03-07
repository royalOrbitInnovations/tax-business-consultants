import Image from "next/image";
import FooterSocials from "./FooterSocials";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";

const data = {
  set1: {
    name: "Quick Links",
    links: ["Home", "About Us", "Blog", "Contact Us", "Services"],
  },
  set2: {
    name: "Our Services",
    links: [
      "Business Startup Consultants",
      "Business Management Services",
      "Business Administration Services",
      "Data Analytics",
    ],
  },
};

export default function Footer() {
  return (
    <div
      className="relative bg-black px-[20rem] py-[5rem] text-white grid grid-cols-5 overflow-hidden"
      style={{ fontFamily: "var(--font-secondary)" }}
    >
      <div className="w-[22rem] flex flex-col gap-[2rem]">
        <div className="relative h-[8rem] w-[20rem]">
          <Image
            fill
            src="/images/logo-footer-tax-business-consultants.png"
            alt="Footer-logo"
            className="object-cover"
          />
        </div>
        <p className="text-2xl">
          Get innovative solutions for business growth. Your business&apos;s
          path to success starts with our solutions and expert guidance.
        </p>

        <FooterSocials />
      </div>

      {Object.values(data).map((section, index) => (
        <FooterLinks section={section} key={index} />
      ))}

      <div className="mt-[4rem]">
        <h3 className="text-5xl font-bold mb-4 ">Get In Touch</h3>
        <p className="text-2xl">
          Hub Business Center <br /> 4th Floor, Royal Plaza <br /> Al Sadd,
          Qatar
        </p>
      </div>

      <FooterContact />
      <h2 className="absolute text-[10rem] text-white/20 bottom-[-15%] w-[100%] text-center">
        Tax Business Consultants
      </h2>
    </div>
  );
}
