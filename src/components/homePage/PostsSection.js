import Image from "next/image";
import Link from "next/link";

const data = [
  {
    type: "consulting",
    date: "03 April, 2024",
    image: "/images/post-image-1.png",
    text: "The Growing Relevance of Data Analytic for Business in Qatar",
  },
  {
    type: "consulting",
    date: "03 April, 2024",
    image: "/images/post-image-2.png",
    text: "Best Practice for Opening a Corporate Bank Account in Qatar",
  },
  {
    type: "consulting",
    date: "03 April, 2024",
    image: "/images/post-image-3.png",
    text: "The Company Formatopn Process in Qatar",
  },
];

export default function PostsSection() {
  return (
    <div className="flex mt-[5rem] gap-[5rem] justify-around">
      {data.map((item, index) => (
        <div key={index}>
          <div className="flex gap-[2rem] mb-[1rem]">
            <span className="flex gap-[1rem]">
              <img src="/svg/consulting-tag.svg" alt="Consulting-tag" />
              Consulting
            </span>
            <span className="flex gap-[1rem]">
              <img src="/svg/calender.svg" alt="Calender" />
              {item.date}
            </span>
          </div>
          <div className="relative h-[30rem] w-[40rem] max-17xl:w-[35rem] max-15xl:w-[30rem] aspect-[16/9] rounded-lg overflow-hidden shadow-2xl hover:scale-102 hover:rotate-20 transition-all duration-500">
            <Image
              src={item.image}
              fill
              alt="post-image"
              className="object-cover"
            />
          </div>
          <h2 className="text-[2.5rem] w-[70%] mt-[2rem]">{item.text}</h2>
          <Link
            href="/Blog/post"
            className="flex gap-[1rem] text-2xl items-center font-bold mt-[2rem]"
          >
            Read More
            <img
              src="/svg/arrorw-top-right-tax-business-consultants.svg"
              alt="arrow"
              className="w-[2rem] h-[2rem]"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
