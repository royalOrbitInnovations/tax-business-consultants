import CountUpOnView from "../CountUpOnView";

const data = [
  {
    number: "100",
    symbol: "K+",
    logo: "/svg/happy-customers.svg",
    text: "Happy Cusotmers",
  },
  {
    number: "12",
    symbol: "+",
    logo: "/svg/world.svg",
    text: "Years in Business",
  },
  {
    number: "100",
    symbol: "%",
    logo: "/svg/customer-satisfaction-2.svg",
    text: "Customer Satisfaction",
  },
  {
    number: "400",
    symbol: "+",
    logo: "/svg/happy-client.svg",
    text: "Happy Clients",
  },
];

export default function PreFooterBanner() {
  return (
    <div className="bg-(--ui-dark) text-white grid grid-cols-4 items-center justify-items-center py-[3rem] px-[20rem] max-10xl:px-[15rem] max-7xl:px-[2rem] max-5xl:grid-cols-2 max-5xl:gap-[1rem]">
      {data.map((item, index) => (
        <div key={index} className="flex gap-[2rem]">
          <div>
            <img
              src={item.logo}
              alt={item.text}
              className="max-4xl: w-[4rem] h-[4rem]"
            />
          </div>
          <div>
            <div className="flex gap-[.5rem] text-5xl">
              <CountUpOnView end={item.number} duration={3} />
              <span>{item.symbol}</span>
            </div>
            <p className="text-3xl">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
