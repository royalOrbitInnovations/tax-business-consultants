export default function TextWithBorder({ text, py, size }) {
  return (
    <div
      className="text-3xl border w-fit px-[2rem] py-[1rem] rounded-[25px] font-bold shadow-lg"
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
