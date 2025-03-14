import Link from "next/link";

export default function FooterLinks({ section }) {
  const { name, links } = section;

  return (
    <div className=" mt-[4rem] max-10xl:mt-[1rem] max-10xl:col-span-2 max-10xl:flex max-10xl:gap-[5rem] max-6xl:gap-[2rem] max-10xl:items-center max-10xl:h-[5rem]">
      <h3 className="text-5xl font-bold mb-4 max-10xl:mb-0">{name}</h3>
      <ul className="flex flex-col gap-3 max-10xl:flex-row max-10xl:gap-[3rem] max-6xl:gap-[1rem]">
        {links.map((item, index) => (
          <li
            key={index}
            className="text-2xl max-10xl:border-r  max-10xl:last:border-r-0 max-10xl:pr-[3rem] max-6xl:pr-[1rem]"
          >
            <Link href={`${item.link}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
