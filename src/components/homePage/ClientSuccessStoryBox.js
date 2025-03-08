import Image from "next/image";

export default function ClientSuccessStoryBox({ item, className }) {
  const { head, text } = item;
  return (
    <div
      className={` relative ${className} bg-(--ui-light) py-[5rem] max-14xl:py-[3rem] px-[3rem] flex flex-col gap-[3rem] max-14xl:gap-[1.5rem] shadow-xl hover:scale-105 transition-all duration-300 hover:bg-[#EFEAE6]`}
    >
      <h2 className="text-[3rem]">{head}</h2>
      <p className="text-[1.8rem]">{text}</p>
      <button className="flex gap-[1rem] text-[1.8rem] items-center">
        Learn More
        <img
          src="/svg/arrorw-top-right-tax-business-consultants.svg"
          alt="arrow"
          className="w-[2rem]"
        />
      </button>
      {className && (
        <>
          <div className="absolute h-[20rem] w-[20rem] bottom-0 right-0">
            <Image
              src="/images/client-success-story.png"
              fill
              alt="Leaf-image"
              className="object-cover"
            />
          </div>
        </>
      )}
    </div>
  );
}
