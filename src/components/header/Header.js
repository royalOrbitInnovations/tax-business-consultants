import Logo from "@/components/Logo";
import HeaderLinks from "@/components/header/HeaderLinks";

export default function Header() {
  return (
    <div className="grid grid-cols-2 items-center fixed top-[3.5rem] right-[50%] translate-x-[50%] z-1000 bg-white/90 rounded-2xl w-[80%] px-[3rem] py-[.6rem]">
      <Logo type="header" />
      <HeaderLinks />
    </div>
  );
}
