export default function IndustryItems({ item }) {
  return (
    <div className="bg-(--ui-light) border border-(--ui-dark) py-[5rem] px-[7rem] shadow-xl rounded-[25px] flex flex-col items-center justify-center gap-[2rem] w-[27rem] max-18xl:w-[23rem] max-16xl:w-[18rem] max-16xl:px-[5rem] max-16xl:py-[3rem] max-16xl:gap-[1.5rem] hover:rotate-6 transition-all duration-300 ease-in-out">
      <img
        src={item.image}
        alt={item.text}
        className="w-[10rem] h-[10rem] max-16xl:w-[8rem] max-16xl:h-[8rem]"
      />
      <h2
        className="text-4xl text-center"
        style={{ fontFamily: "var(--font-secondary)" }}
      >
        {item.text}
      </h2>
    </div>
  );
}
