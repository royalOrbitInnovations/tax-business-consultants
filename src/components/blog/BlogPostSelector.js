import Image from "next/image";

export default function BlogPostSelector({ blog }) {
  const { heading, excerpt, image, id } = blog;
  return (
    <div className="flex flex-col gap-[2rem] w-[25vw] items-start  border border-(--ui-dark) rounded-[25px] px-[2rem] py-[2rem] mb-[3rem] hover:scale-102 hover:border-(--ui-dark) transition-all duration-300 shadow-xl max-15xl:w-[32vw] max-10xl:w-[38vw] max-6xl:w-[90vw] max-6xl:gap-[4rem]">
      <div className="relative h-[30rem] w-[23vw] rounded-[25px] overflow-hidden shadow-xl max-15xl:w-[29vw] max-10xl:w-[35vw] max-6xl:w-[85vw]">
        <Image
          src={image}
          alt={heading}
          fill
          className="object-cover hover:scale-110 transition-all duration-800"
        />
      </div>
      <h2 className="text-4xl font-bold">{heading}</h2>
      <p className="text-2xl">{excerpt}</p>
      <button className="text-(--ui-dark) text-2xl self-end px-[3rem] cursor-pointer hover:scale-105 transition-all duration-300">
        Read More
      </button>
    </div>
  );
}
