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
      <h2 className="px-[20rem] text-5xl">Industries We Serve</h2>
      <div className="flex mt-[5rem] w-[100%] justify-around flex-wrap gap-10">
        {data.map((item, index) => (
          <IndustryItems key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
