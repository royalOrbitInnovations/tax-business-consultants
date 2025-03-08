import Image from "next/image";
import TextWithBorder from "../TextWithBorder";

const data = [
  {
    link: "/images/slider-image-1.png",
    type: "Business",
    text: "Busines Startup Consultants",
  },
  {
    link: "/images/slider-image-2.png",
    type: "Business",
    text: "Business Administartion Services",
  },
  {
    link: "/images/slider-image-3.png",
    type: "Busines",
    text: "Business Management Services",
  },
  {
    link: "/images/slider-image-4.png",
    type: "Marketing",
    text: "Data Analytics",
  },
];

export default function OurCoverAreaSlider() {
  return (
    <div className="flex w-[100%] justify-around absolute top-[100%] left-0">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col gap-[2rem]">
          <div className="relative h-[25rem] w-[46rem] max-18xl:w-[40rem] max-16xl:w-[35rem] max-15xl:w-[30rem] aspect-[16/9]">
            <Image
              src={item.link}
              fill
              className="object-cover shadow-lg rounded-lg hover:scale-90 transition-all duration-000"
              alt="Slider Image"
            />
          </div>
          <TextWithBorder text={item.type} py="0.3rem" size="1.6rem" />
          <h3 className="text-4xl">{item.text}</h3>
        </div>
      ))}
    </div>
  );
}
