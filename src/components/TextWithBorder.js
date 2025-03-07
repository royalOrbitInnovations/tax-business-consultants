export default function TextWithBorder({ text, py, size }) {
  return (
    <div
      className="text-3xl border w-fit px-[2rem] py-[1rem] rounded-[25px] font-bold shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out hover:bg-(--ui-dark) hover:text-white"
      style={{
        fontFamily: "var(--font-secondary)",
        paddingTop: py,
        paddingBottom: py,
        fontSize: size,
      }}
    >
      {text}
    </div>
  );
}
