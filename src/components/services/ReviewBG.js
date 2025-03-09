"use client";

import { useInView } from "react-intersection-observer";

export default function ReviewBG() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const blocks = [
    { width: "w-[45%]", extraClasses: "" },
    { width: "w-[15%]", extraClasses: "opacity-90" },
    { width: "w-[10%]", extraClasses: "opacity-90" },
    { width: "w-[7%]", extraClasses: "opacity-70" },
    { width: "w-[5%]", extraClasses: "opacity-40" },
    { width: "w-[3%]", extraClasses: "opacity-20" },
    { width: "w-[1%]", extraClasses: "opacity-10" },
  ];

  return (
    <div
      ref={ref}
      className="h-[100%] w-[30vw] max-6xl:w-[50vw] flex gap-[2rem]"
    >
      {blocks.map((block, index) => (
        <div
          key={index}
          className={`h-[100%] ${block.width} bg-gradient-to-b from-(--ui-light) via-(--ui-light) to-white ${block.extraClasses} transition-all duration-500`}
          style={{
            transform: inView ? "translate(0, 0)" : "translate(-50px, -50px)",
            transitionDelay: `${index * 150}ms`,
          }}
        />
      ))}
    </div>
  );
}
