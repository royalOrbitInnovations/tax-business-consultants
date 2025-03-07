import Image from "next/image";
const data = {
  Qatar: {
    Customer: "20%",
    Revenue: "90%",
  },
  Canada: {
    Customer: "20%",
    Revenue: "90%",
  },
  Ghana: {
    Customer: "20%",
    Revenue: "90%",
  },
  Nambia: {
    Customer: "20%",
    Revenue: "90%",
  },
  Bolivia: {
    Customer: "20%",
    Revenue: "90%",
  },
};
export default function WorldMapInfoPopup({ country }) {
  return (
    <div className="absolute right-10 top-10 h-[20rem] w-[35rem] bg-white/90 rounded-4xl py-[2rem] px-[2rem] border shadow-2xl flex flex-col justify-between z-10000">
      <div className="grid grid-cols-4 justify-between items-center gap-[.5rem] w-[100%]">
        <h2 className="text-3xl text-white bg-(--ui-dark) py-[.5rem] rounded-2xl text-center">
          {country}
        </h2>
        <div className="relative h-[3rem] w-[4rem] col-span-2">
          <Image
            src="/images/qatar-flag.png"
            alt="Qatar-Flag"
            fill
            className="object-cover"
          />
        </div>
        <h2 className="text-3xl text-black text-center font-bold bg-(--ui-light) px-[1.5rem] py-[.5rem] rounded-2xl">
          2025
        </h2>
      </div>
      <div className="relative bg-gray-100 rounded-4xl h-[70%] w-[100%] px-[2rem] py-[1rem] flex justify-around">
        <div className="flex flex-col justify-around gap-[.5rem]">
          <span className="text-2xl font-bold bg-white border w-[15rem] px-[1rem] py-[0.5rem] rounded-4xl">
            Customer - {data[country].Customer}
          </span>
          <span className="text-2xl font-bold bg-white border w-[15rem] px-[1rem] py-[0.5rem]  rounded-4xl">
            Revenue - {data[country].Revenue}
          </span>
        </div>
        <div className="relative h-[8rem] w-[8rem]">
          <Image
            src="/images/graph.png"
            alt="Graph-image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
