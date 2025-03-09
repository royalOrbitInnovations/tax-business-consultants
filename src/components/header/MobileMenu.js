"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import ServicesLinks from "./ServicesLinks";

export default function MobileMenu() {
  // For the main menu, we'll animate each item (Home, About, Contact, Services, Blog)
  const menuItems = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "About", href: "/about-us" },
      { label: "Contact", href: "/contact-us" },
      { label: "Services", href: "/services", dropdown: true },
      { label: "Blog", href: "/blog" },
    ],
    []
  );

  // State for the animation of each menu item
  const [menuAnimations, setMenuAnimations] = useState(
    Array(menuItems.length).fill(false)
  );
  const animationTimeouts = useRef([]);

  // State to toggle the Services dropdown
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    // When the MobileMenu mounts, animate each menu item sequentially.
    animationTimeouts.current = menuItems.map((_, index) =>
      setTimeout(() => {
        setMenuAnimations((prev) => {
          const newAnims = [...prev];
          newAnims[index] = true;
          return newAnims;
        });
      }, index * 100)
    );

    // Cleanup timeouts on unmount
    return () => {
      animationTimeouts.current.forEach(clearTimeout);
    };
  }, [menuItems]);

  return (
    <ul
      className="flex flex-col gap-6 text-[2.6rem] font-bold p-[2rem]"
      style={{ fontFamily: "var(--font-secondary)" }}
    >
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`hover:text-(--ui-dark) transition-all duration-300 ${
            menuAnimations[index] ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {item.dropdown ? (
            <div className="relative flex items-center gap-2">
              {/* The clickable link */}
              <Link href={item.href}>{item.label}</Link>
              {/* The toggle button */}
              <button
                onClick={() => setServicesOpen((prev) => !prev)}
                type="button"
                className="cursor-pointer"
              >
                <img
                  src="/svg/arrow-down-tax-business-consultants.svg"
                  alt="drop-down-arrow"
                  className={`transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <ServicesLinks
                  isMobile={true}
                  setDisplay={() => {}}
                  hovered={servicesOpen}
                />
              )}
            </div>
          ) : (
            <Link href={item.href}>{item.label}</Link>
          )}
        </li>
      ))}
    </ul>
  );
}
