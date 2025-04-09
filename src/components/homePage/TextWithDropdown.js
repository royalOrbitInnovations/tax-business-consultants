"use client";

import { useState, useEffect, useRef } from "react";

export default function TextWithDropdown({ title, items }) {
  const [isHovered, setIsHovered] = useState(false);
  const [animations, setAnimations] = useState([]);
  const animationTimeouts = useRef([]);

  useEffect(() => {
    if (isHovered) {
      const timeouts = items?.map((_, index) =>
        setTimeout(() => {
          setAnimations((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }, index * 100)
      );
      animationTimeouts.current = timeouts;
    } else {
      setAnimations(items?.map(() => false));
      animationTimeouts.current.forEach(clearTimeout);
      animationTimeouts.current = [];
    }

    return () => {
      animationTimeouts.current.forEach(clearTimeout);
    };
  }, [isHovered, items]);

  return (
    <div
      className="relative w-fit text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-[2.5rem] max-10xl:text-3xl max-10xl:font-bold max-16xl:text-[2.5rem] max-15xl:text-[2.5rem] cursor-pointer">
        {title}
      </h3>

      {items && items.length > 0 && (
        <div className="absolute top-[2rem] left-1/2 -translate-x-[40%] mt-4 z-50">
          {isHovered && (
            <ul
              className="bg-white shadow-lg rounded-2xl p-6 w-[35rem] max-w-[90vw] text-left text-[1.5rem] space-y-2"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              {items.map((item, idx) => (
                <li key={idx} className="relative overflow-hidden">
                  <span
                    className={`block relative transition-transform duration-300 ${
                      animations[idx] ? "translate-x-0" : "-translate-x-full"
                    }`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
