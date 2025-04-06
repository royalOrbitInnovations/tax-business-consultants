import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="bg-(--ui-dark) text-white px-[20rem] py-[5rem] flex justify-between items-center max-10xl:py-[10rem] max-6xl:px-[5rem]">
      <div>
        <p className="text-3xl">Let&apos;s Build Together</p>
        <p className="text-7xl">Need to Rethink your Business Process?</p>
      </div>
      <button className="border px-[5rem] py-[2rem] text-3xl hover:bg-white hover:text-(--ui-dark) transition-all duration-300 cursor-pointer">
        <Link href="/contact-us">Get in Touch</Link>
      </button>
    </div>
  );
}
