import TextWithBorder from "../TextWithBorder";
import ClientSuccessStoryBox from "./ClientSuccessStoryBox";

const data = [
  {
    head: "Consulting Expertise",
    text: "Our consulting expertise entails in-depth industry knowledge andtailored solutions, essential for guidingbusinesses toward sustainable growth.",
  },
  {
    head: "Deep Industry Experience",
    text: "Our deep industry experience serves as a cornerstone of excellence in business consulting, empowering consultants to deliver informed, effective, and innovative solution that drive sustainable growth and competitive advantage for our clients.",
  },
  {
    head: "Rapid Value Creation",
    text: "Our rapid value creation involves swiftly generating tangible benefits and sustainable growth through innovative strategies and efficient execution.",
  },
];

export default function ClientSuccessStory() {
  return (
    <div className="mt-[63rem] max-18xl:mt-[50rem] max-16xl:mt-[28%] max-14xl:mt-[35%] max-6xl:mt-[50%] max-5xl:mt-[55%] px-[20rem] max-14xl:px-[15rem] max-6xl:px-[5rem] flex flex-col gap-[5rem] max-4xl:mt-[80%]">
      <TextWithBorder text="Why Tax Business Consultant" />
      <h3 className="text-[4rem]/20 w-[70%] max-14xl:w-[95%]">
        From feasibility study to business plan development, our expert team
        provides comprehensive company registration services in Qatar, ensuring
        a seamless launch for your entrepreneurial journey.
      </h3>
      <div className="grid grid-cols-4 max-10xl:grid-cols-2 gap-[2rem] max-14xl:gap-[1.2rem] max-10xl:gap-[3rem]">
        {data.map((item, index) => (
          <ClientSuccessStoryBox
            key={index}
            item={item}
            className={
              index === 1 ? "max-10xl:row-start-1 col-span-2 bg-[#EFEAE6]" : ""
            }
          />
        ))}
      </div>
    </div>
  );
}
