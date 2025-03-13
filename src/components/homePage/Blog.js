import Image from "next/image";
import TextWithBorder from "../TextWithBorder";

export default function Blog() {
  return (
    <div className="px-[20rem] max-14xl:px-[15rem] max-6xl:px-[5rem]">
      <TextWithBorder text="Blog" />
      <div className=" flex  max-10xl:grid max-10xl:grid-cols-1 items-center">
        <div className="flex flex-col gap-[2rem] mt-[4rem] w-[100%]">
          <h2 className="text-[5rem]/20  w-[70%] max-10xl:w-[100%] max-10xl:text-center max-6xl:text-left">
            Get the coverage you need for your business, family, and assets.
          </h2>
          <p className="text-4xl w-[80%] mt-[2rem] max-10xl:w-[100%]">
            We Tax Business consultants (TBC) play a crucial role in helping
            organizations thrive by analyzing challenges, identifying growth
            opportunities, and implementing strategies. We offer tailored
            guidance to navigate complexities, optimize operations, and foster
            innovation, impacting businesses of all sizes. We work closely with
            leadership, provide market expansion strategies, assist in mergers,
            and enhance adaptability. Our contributions go beyond immediate
            gains, laying a foundation for long-term success.
          </p>
        </div>
        <div className="relative max-10xl:row-start-1 max-10xl:mx-auto max-10xl:mt-[3rem] h-[30rem] w-[80rem] max-8xl:w-[100%] rounded-[10px] overflow-hidden shadow-2xl">
          <Image
            src="/images/blog-image.webp"
            fill
            className="object-cover object-top hover:scale-120 transition-all duration-700"
            alt="Blog-Image"
          />
        </div>
      </div>
    </div>
  );
}
