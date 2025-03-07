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
        <WorldMapDot top="33rem" left="120rem" country="Qatar" />
        <WorldMapDot top="18rem" left="50rem" country="Canada" />
        <WorldMapDot top="44rem" left="90rem" country="Ghana" />
        <WorldMapDot top="66rem" left="105rem" country="Nambia" />
        <WorldMapDot top="61rem" left="60rem" country="Bolivia" />
        <WorldMapText />
      </div>
    </div>
  );
}
