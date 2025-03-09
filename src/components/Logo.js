import Image from "next/image";

export default function logo({ type }) {
  return (
    <div className="relative w-[15rem] h-[6rem]">
      <Image
        fill
        src={
          type === "header"
            ? "/images/logo-header-tax-business-consultants.webp"
            : "/logo-footer-tax-business-consultants.webp"
        }
        alt="Brand Logo"
        className="object-cover hover:scale-105 transition-all duration-300"
      />
    </div>
  );
}
