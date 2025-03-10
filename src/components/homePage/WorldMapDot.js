"use client";

import { useState } from "react";
import WorldMapInfoPopup from "./WorldMapInfoPopup";

export default function WorldMapDot({ top, left, country }) {
  const [display, setDisplay] = useState(false);
  return (
    <div
      className={`h-[1.5rem] w-[1.5rem] bg-(--ui-dark) absolute rounded-[50%] shadow-[0_6px_12px_-2px_rgba(0,0,0,0.7)] hover:scale-120`}
      style={{ top: top, left: left }}
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      {display && <WorldMapInfoPopup country={country} />}
    </div>
  );
}
