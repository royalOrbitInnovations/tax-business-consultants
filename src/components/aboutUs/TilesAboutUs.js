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
    <div className="relative flex justify-center items-center gap-[5rem] px-[20rem] py-[10rem] max-10xl:px-[10rem] max-8xl:grid max-8xl:grid-cols-2 max-6xl:grid-cols-1 max-6xl:grid-rows-3 max-5xl:px-[5rem]">
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center gap-[1rem] w-[35rem] h-[40vh] border py-[2rem] px-[2rem] bg-white/10 backdrop-blur-xs text-center rounded-3xl hover:border-3 hover:border-(--ui-dark) transition-all duration-300 hover:text-(--ui-dark) hover:skew-1 hover:scale-105 shadow-xl max-6xl:w-[100%] ${
            index === 2 &&
            "max-8xl:col-span-2 max-8xl:w-[100%] max-6xl:row-start-3 max-6xl:col-span-1"
          } ${index === 1 && "max-6xl:row-start-2"} `}
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
