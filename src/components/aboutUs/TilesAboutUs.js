import Image from "next/image";

const data = [
  {
    image: "/svg/consulting-expertise.svg",
    head: "Consulting Expertise",
    text: "Our consulting expertise entails in depth industry knowledge,andtailored solutions, essential for guidingbusinesses toward sustainable growth.",
  },
  {
    image: "/svg/rapid-value-creation.svg",
    head: "Rapid Value Creation",
    text: "Our rapid value creation involves swiftly generating tangible benefits and sustainable growth through innovative strategies and efficient execution. ",
  },
  {
    image: "/svg/deep-industry-experience.svg",
    head: "Deep Industry Experience",
    text: "Our deep industry experience serves as cornerstone of excellence consulting, empowering consultants to delived informed, effective, and innovative solutions advantage for our clients",
  },
];

export default function TilesAboutUs() {
  return (
    <div className="relative flex justify-center items-center gap-[2rem] px-[20rem] py-[10rem]">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-[1rem] w-[20%] h-[40vh] border py-[2rem] px-[2rem] bg-white/10 backdrop-blur-sm text-center rounded-3xl hover:border-3 hover:border-(--ui-dark) transition-all duration-300 hover:text-(--ui-dark) hover:skew-1 hover:scale-105"
        >
          <img
            src={item.image}
            alt={item.head}
            className="hover:rotate-360 transition-all duration-500"
          />
          <h2 className="font-bold text-3xl">{item.head}</h2>
          <p className="text-2xl font-bold">{item.text}</p>
        </div>
      ))}
      <div className="absolute top-[50%] translate-y-[-50%] w-[100vw] h-[50vh] z-[-1]">
        <Image
          src="/images/tiles-bg.webp"
          alt="bg-image"
          fill
          className="object-contain object-center"
        />
      </div>
    </div>
  );
}
