"use client";

import Link from "next/link";

export default function ButtonUI({
  children,
  width,
  size,
  paddingY,
  to = "/",
}) {
  return (
    <Link href={to} legacyBehavior>
      <a
        className={`bg-[var(--ui-dark)] text-white px-[2rem] py-[.6rem] rounded-4xl flex justify-center items-center gap-[2rem] shadow-xl hover:scale-110 transition-all duration-300  font-[var(--font-secondary)]`}
        style={{ width: width, fontSize: size, padding: `${paddingY} 0` }}
      >
        {children}
      </a>
    </Link>
  );
}
