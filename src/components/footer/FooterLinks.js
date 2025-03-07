import Link from "next/link";

export default function FooterLinks({ section }) {
  const { name, links } = section;

  return (
    <div className=" mt-[4rem]">
      <h3 className="text-5xl font-bold mb-4">{name}</h3>
      <ul className="flex flex-col gap-3">
        {links.map((item, index) => (
          <li key={index} className="text-2xl">
            <Link href="/">{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
