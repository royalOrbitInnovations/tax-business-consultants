import Image from "next/image";
import TextWithBorder from "../TextWithBorder";

export default function AboutUs() {
  return (
    <div className="px-[20rem] bg-[#0D172D] py-[10rem] text-white grid grid-cols-2 gap-[2rem] justify-items-center">
      <div className="flex flex-col gap-[2rem] text-justify">
        <TextWithBorder text="About Us" />
        <p className="text-5xl">
          As the premier company specializing in advanced business startup and
          management consulting services in Qatar, we have catered to diverse
          clients from around the globe. Our track record speaks volumes,
          consistently surpassing client expectations with exceptional results.
          Committed to delivering unparalleled customer service, we strive to
          uphold the highest standards in all aspects of our engagements,
          including business formation in Qatar.
        </p>
        <hr />
        <div className="flex items-center justify-center gap-[2rem] hover:scale-110 transition-all duration-300">
          <span className="text-2xl">Review On</span>
          <span className="text-8xl">TBC</span>
          <img src="/svg/stars.svg" alt="stars-image" />
          <span className="text-2xl">(50 Reviews)</span>
        </div>
        <div className="flex gap-[2rem] items-center justify-center">
          <TextWithBorder text="Problem Solving" size="1.5rem" />
          <TextWithBorder text="Rapid Value Generation" size="1.5rem" />
          <TextWithBorder text="Determine Problem" size="1.5rem" />
        </div>
      </div>
      <div className="relative h-[50vh] w-[25vw] rounded-[25px] overflow-hidden">
        <Image
          src="/images/about-us-image-2.webp"
          alt="about-us-image-2"
          fill
          className="object-cover hover:scale-110 transition-all duration-300"
        />
      </div>
    </div>
  );
}
