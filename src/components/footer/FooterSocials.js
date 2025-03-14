import Link from "next/link";

const data = [
  { link: "https://x.com/qatar_tax", svg: "/svg/twitter.svg" },
  {
    link: "https://www.instagram.com/tax_business_consultants/",
    svg: "/svg/instagram.svg",
  },
  {
    link: "https://www.facebook.com/people/Tax-Business-Consultants-Qatar/61562062665169/",
    svg: "/svg/facebook.svg",
  },
  {
    link: "https://www.linkedin.com/in/tax-business-consultants-qatar-4416212b8/",
    svg: "/svg/linkedin.svg",
  },
];

export default function FooterSocials() {
  return (
    <div className="flex gap-[1rem]">
      {data.map((item, index) => (
        <Link href={item.link} key={index}>
          <img
            key={index}
            src={item.svg}
            alt="footer-socials"
            className="border border-white p-[.5rem] rounded-full h-[3.5rem] w-[3.5rem] cursor-pointer"
          />
        </Link>
      ))}
    </div>
  );
}
