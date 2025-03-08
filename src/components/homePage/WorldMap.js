import Image from "next/image";
import WorldMapDot from "./WorldMapDot";
import WorldMapText from "./WorldMapText";

export default function WorldMap() {
  return (
    <div className="mt-[3rem]">
      <div className="relative h-[80rem] w-[100vw]">
        <Image
          src="/images/world-map.png"
          alt="Worlld Map Image"
          fill
          className="object-cover"
        />
        <WorldMapDot top="42%" left="63%" country="Qatar" />
        <WorldMapDot top="22%" left="25%" country="Canada" />
        <WorldMapDot top="53%" left="48%" country="Ghana" />
        <WorldMapDot top="80%" left="55%" country="Nambia" />
        <WorldMapDot top="76%" left="32%" country="Bolivia" />
        <WorldMapText />
      </div>
    </div>
  );
}
