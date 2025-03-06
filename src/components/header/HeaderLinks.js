"use client";

import { useState } from "react";
import ServicesLinks from "./ServicesLinks";
import ButtonUI from "../ButtonUI";

export default function HeaderLinks() {
  const [display, setDisplay] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <ul className="flex gap-15 items-center justify-end text-[1.6rem] font-bold">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li
        onMouseEnter={() => {
          setDisplay(true);
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
          setDisplay(false);
        }}
        className="flex gap-2 relative"
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
      <li>Blog</li>
      <li className="ml-[5rem] flex gap-6">
        <ButtonUI>Consultation</ButtonUI>
        <img
          src="/svg/header-menu-tax-business-consultants.svg"
          alt="Menu-logo"
        />
      </li>
    </ul>
  );
}
