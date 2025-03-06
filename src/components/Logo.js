import Image from "next/image";

export default function logo({ type }) {
  return (
    <div className="relative w-[15rem] h-[6rem]">
      <Image
        fill
        src={
          type === "header"
            ? "/images/logo-header-tax-business-consultants.png"
            : "/logo-footer-tax-business-consultants.png"
        }
        alt="Brand Logo"
        className="object-cover"
      />
    </div>
  );
}
