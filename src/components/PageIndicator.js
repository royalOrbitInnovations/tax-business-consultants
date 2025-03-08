import Link from "next/link";

export default function PageIndicator({ mainText, currentPage }) {
  return (
    <div className="text-white relative z-[100] top-[50%] translate-y-[-50%] pl-[15rem]">
      <h1 className="text-[8rem]">{mainText}</h1>
      <div className="flex gap-[3rem] items-center border w-fit px-[2rem] py-[1rem]">
        <Link href="/" className="text-[2rem]">
          Home
        </Link>
        <div className="h-5 w-5 bg-white rounded-full" />
        <Link href="/services" className="text-[2rem]">
          {currentPage}
        </Link>
      </div>
    </div>
  );
}
