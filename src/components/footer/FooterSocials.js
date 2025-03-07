const data = [
  "/svg/twitter.svg",
  "/svg/instagram.svg",
  "/svg/facebook.svg",
  "/svg/linkedin.svg",
];

export default function FooterSocials() {
  return (
    <div className="flex gap-[1rem]">
      {data.map((item, index) => (
        <img
          key={index}
          src={item}
          alt="footer-socials"
          className="border border-white p-[.5rem] rounded-full h-[3.5rem] w-[3.5rem]"
        />
      ))}
    </div>
  );
}
