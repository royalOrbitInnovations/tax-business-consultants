"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const items = [
  "100% Ownership Business in Qatar",
  "Company Formation in Qatar",
  "PRO Services in Qatar",
  "Business Consultancy Services",
  "Local Sponsorships",
  "Document Attestation",
];
export default function ServicesLinks({ setDisplay, hovered }) {
  const [linkAnimations, setLinkAnimations] = useState(items.map(() => false));
  const animationTimeouts = useRef([]);

  useEffect(() => {
    if (hovered) {
      const newTimeouts = items.map((_, index) => {
        return setTimeout(() => {
          setLinkAnimations((prevAnimations) => {
            const newAnimations = [...prevAnimations];
            newAnimations[index] = true;
            return newAnimations;
          });
        }, index * 100);
      });
      animationTimeouts.current = newTimeouts;
    } else {
      setLinkAnimations(items.map(() => false));
      animationTimeouts.current.forEach(clearTimeout);
      animationTimeouts.current = [];
    }

    return () => {
      animationTimeouts.current.forEach(clearTimeout);
    };
  }, [hovered]);
  return (
    <ul
      className="bg-white/90 absolute bottom-0 translate-y-[100%] w-[35rem] flex flex-col gap-5 rounded-[25px] px-[3rem] py-[2rem]"
      onMouseLeave={() => setDisplay(false)}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <li className="relative overflow-hidden">
            <Link href={`/services/${item.toLowerCase().replace(/ /g, "-")}`}>
              <span
                className={`block relative transition-transform duration-300 ${
                  linkAnimations[index] ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                {item}
              </span>
            </Link>
          </li>
          {index < items.length - 1 && <hr className="opacity-50" />}
        </React.Fragment>
      ))}
    </ul>
  );
}
