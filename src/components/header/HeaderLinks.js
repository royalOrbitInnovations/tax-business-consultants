"use client";

import { useState } from "react";
import ServicesLinks from "./ServicesLinks";
import ButtonUI from "../ButtonUI";
import Link from "next/link";

export default function HeaderLinks() {
  const [display, setDisplay] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <ul
      className="flex gap-15 items-center justify-end text-[1.6rem] font-bold"
      style={{ fontFamily: "var(--font-secondary)" }}
    >
      <li className="hover:text-(--ui-dark) hover:scale-105 transition-all duration-300">
        <Link href="/">Home</Link>
      </li>

      <li className="hover:text-(--ui-dark) hover:scale-105 transition-all duration-300">
        <Link href="/about-us">About</Link>
      </li>
      <li className="hover:text-(--ui-dark) hover:scale-105 transition-all duration-300">
        <Link href="/contact-us">Contact</Link>
      </li>
      <li
        onMouseEnter={() => {
          setDisplay(true);
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
          setDisplay(false);
        }}
        className="flex gap-2 relative hover:text-(--ui-dark) hover:scale-105 transition-all duration-300"
      >
        <div className="flex items-center gap-2">
          Services
          <img
            src="/svg/arrow-down-tax-business-consultants.svg"
            alt="drop-down-arrow"
          />
        </div>
        {display && <ServicesLinks setDisplay={setDisplay} hovered={hovered} />}
      </li>
      <li className="hover:text-(--ui-dark) hover:scale-105 transition-all duration-300">
        <Link href="/blog">Blog</Link>
      </li>
      <li className="ml-[5rem] flex gap-6">
        <Link href="/contact-us">
          <ButtonUI>Consultation</ButtonUI>{" "}
        </Link>
        <img
          src="/svg/header-menu-tax-business-consultants.svg"
          alt="Menu-logo"
          className="hover:rotate-180 hover:scale-105 transition-all duration-300"
        />
      </li>
    </ul>
  );
}
