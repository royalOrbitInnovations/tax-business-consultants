import IndustryItems from "./IndustryItems";

const data = [
  { image: "/svg/health-care.svg", text: "Health Care" },
  { image: "/svg/finance.svg", text: "Finance" },
  { image: "/svg/retail.svg", text: "Retail" },
  { image: "/svg/manufacturing.svg", text: "Manufacturing" },
  { image: "/svg/media-and-advertising.svg", text: "Media & Advertising" },
  { image: "/svg/technology.svg", text: "Technology" },
];

export default function IndustriesWeServe() {
  return (
    <div className="py-[6rem]">
      <h2 className="px-[20rem] max-14xl:px-[15rem] max-6xl:px-[5rem] text-5xl">
        Industries We Serve
      </h2>
      <div className="flex mt-[5rem] w-[95%]  mx-auto justify-between flex-wrap gap-10 max-10xl:grid max-10xl:grid-cols-3 max-10xl:items-center max-10xl:w-[80%] max-10xl:mx-auto max-10xl:justify-items-center">
        {data.map((item, index) => (
          <IndustryItems key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
