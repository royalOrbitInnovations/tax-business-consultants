import Link from "next/link";

const data = [
  {
    logo: "/svg/phone-blue.svg",
    text: "+974 6676 1700",
  },
  {
    logo: "/svg/mail-blue.svg",
    text: "info@tbcqa.com",
  },
  {
    logo: "/svg/location-blue.svg",
    text: "Hub Business Center 4th Floor, Royal Plaza Al Sadd, Qatar",
  },
];

export default function ConatctAndMap() {
  return (
    <div className="px-[20rem] flex justify-between items-center h-[40vh] gap-[2rem] my-[10rem] max-14xl:px-[15rem] max-14xl:my-[5rem] max-10xl:flex-col max-10xl:items-center max-10xl:h-auto max-6xl:px-[10rem] max-5xl:px-[5rem]">
      <div className="border border-(--ui-light) px-[5rem] py-[4rem] shadow-xl h-full w-[30%] flex flex-col justify-center rounded-[25px] hover:bg-(--ui-light)/20 transition-all duration-300 hover:rotate-2 max-10xl:w-full max-5xl:items-center max-5xl:gap-[4rem]">
        <h2 className="text-5xl flex items-center gap-[4rem] max-16xl:gap-[1rem] max-16xl:text-4xl font-bold max-16xl:flex-wrap max-10xl:flex-col max-10xl:items-start">
          Doha, Qatar
          <Link
            href="https://maps.app.goo.gl/PXeq5iQRbLEtL7XKA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-2xl hover:scale-110 transition-all duration-300 items-center gap-[1rem]"
          >
            View Map
            <img
              src="/svg/arrorw-top-right-tax-business-consultants.svg"
              alt="aroow-svg"
              className="h-[2rem] w-[2rem]"
            />
          </Link>
        </h2>
        <div className="flex flex-col gap-[3rem] mt-[5rem] max-10xl:flex-row max-10xl:mt-[3rem] max-5xl:flex-col max-5xl:mt-[2rem] max-5xl:items-center max-5xl:grid max-5xl:grid-cols-2 max-5xl:gird-rows-2 max-5xl:gap-[1rem]">
          {data.map((item, index) => (
            <p
              key={index}
              className={`flex items-center gap-[2rem] text-3xl w-[22rem] max-5xl:col-span-2 max-5xl:w-full ${
                index === 2 ? "row-span-2" : ""
              }`}
            >
              <img src={item.logo} alt="logo" />
              {item.text}
            </p>
          ))}
        </div>
      </div>
      <div className="w-[70%] h-full shadow-2xl rounded-[25px] overflow-hidden max-10xl:w-full max-10xl:h-[50vh]">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7215.35160447643!2d51.5016349!3d25.2814891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45db11523edea5%3A0xd8e8a766ceba6114!2sTAX%20BUSINESS%20CONSULTANTS%20-%20QATAR!5e0!3m2!1sen!2sus!4v1741580190119!5m2!1sen!2sus"
          loading="lazy"
          allowFullScreen
          width="100%"
          height="100%"
          className="hover:scale-105 transition-all duration-300"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
