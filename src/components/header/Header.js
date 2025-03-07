import Logo from "@/components/Logo";
import HeaderLinks from "@/components/header/HeaderLinks";

export default function Header() {
  return (
    <div className="grid grid-cols-2 items-center fixed top-[3.5rem] right-[50%] translate-x-[50%] z-10000 bg-white/50 backdrop-blur-lg rounded-2xl w-[80%] px-[3rem] py-[.6rem] shadow-xl hover:scale-105 transition-all duration-300">
      <Logo type="header" />
      <HeaderLinks />
    </div>
  );
}
