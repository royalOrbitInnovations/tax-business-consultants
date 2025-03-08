"use client";

import { useState } from "react";
import Logo from "@/components/Logo";
import HeaderLinks from "@/components/header/HeaderLinks";
import ButtonUI from "../ButtonUI";
import Link from "next/link";
import MobileMenu from "@/components/header/MobileMenu"; // create this file

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-[3.5rem] right-[50%] translate-x-[50%] z-10000 w-[80%] max-5xl:w-[95%] bg-white/50 backdrop-blur-lg rounded-2xl px-[3rem] py-[.6rem] shadow-xl hover:scale-105 transition-all duration-300">
      <div className="flex justify-between items-center">
        <Logo type="header" />

        {/* Desktop Navigation: show only on medium and above */}
        <div className="hidden 9xl:flex">
          <HeaderLinks />
        </div>

        {/* Mobile Navigation: show only on small screens */}
        <div className="flex 9xl:hidden items-center gap-8">
          <Link href="/contact-us">
            <ButtonUI width="25rem" size="2rem">
              Consultation
            </ButtonUI>
          </Link>
          <img
            src="/svg/header-menu-tax-business-consultants.svg"
            alt="Menu-logo"
            className="cursor-pointer hover:rotate-180 hover:scale-105 transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="9xl:hidden mt-4">
          <MobileMenu />
        </div>
      )}
    </div>
  );
}
