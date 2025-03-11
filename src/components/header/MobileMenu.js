"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import ServicesLinks from "./ServicesLinks";

export default function MobileMenu({ closeMenu }) {
  // Define the main menu items
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

  // For animating each menu item
  const [menuAnimations, setMenuAnimations] = useState(
    Array(menuItems.length).fill(false)
  );
  const animationTimeouts = useRef([]);

  // To toggle the Services dropdown
  const [servicesOpen, setServicesOpen] = useState(false);

  // Animate in each item, one by one
  useEffect(() => {
    animationTimeouts.current = menuItems.map((_, i) =>
      setTimeout(() => {
        setMenuAnimations((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, i * 100)
    );

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
          {/* If it has dropdown = true, show the arrow */}
          {item.dropdown ? (
            <div className="relative flex items-center gap-2">
              {/* Clicking "Services" itself goes to /services and closes menu */}
              <Link href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>

              {/* Small arrow to toggle the sub-menu (NOT closing the menu) */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation(); // prevent Link click
                  setServicesOpen((prev) => !prev);
                }}
              >
                <img
                  src="/svg/arrow-down-tax-business-consultants.svg"
                  alt="drop-down-arrow"
                  className={`transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* The expanded sub-menu */}
              {servicesOpen && (
                <ServicesLinks
                  isMobile
                  hovered={servicesOpen}
                  // For sub-items inside Services, also close the menu on click
                  setDisplay={() => setServicesOpen(false)}
                  closeMenu={closeMenu}
                />
              )}
            </div>
          ) : (
            // Regular link closes menu on click
            <Link href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
