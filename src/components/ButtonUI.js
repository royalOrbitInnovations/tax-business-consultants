export default function ButtonUI({ children }) {
  return (
    <button className="bg-(--ui-dark) text-white px-[2rem] py-[.6rem] rounded-4xl">
      {children}
    </button>
  );
}
