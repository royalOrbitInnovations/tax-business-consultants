export default function ButtonUI({
  children,
  width,
  size,
  paddingX,
  paddingY,
}) {
  return (
    <button
      className="bg-(--ui-dark) text-white px-[2rem] py-[.6rem] rounded-4xl flex justify-center items-center gap-[2rem]"
      style={{
        width: width,
        fontSize: size,
        fontFamily: "var(--font-secondary)",
        padding: paddingY,
      }}
    >
      {children}
    </button>
  );
}
