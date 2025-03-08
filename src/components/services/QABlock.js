"use client";

export default function QABlock({ id, open, setActive, question, answer }) {
  return (
    <div
      className={`relative flex w-full border border-gray-300 rounded-2xl p-3 hover:bg-[var(--ui-light)] hover:scale-105 transition-transform duration-300 cursor-pointer ${
        open ? "z-[1000]" : "z-0"
      }`}
      onClick={() => setActive((currId) => (currId === id ? null : id))}
      style={{ fontFamily: "var(--font-secondary)" }}
    >
      <div className="flex-1">
        <h2 className="text-3xl ">{question}</h2>
      </div>
      <div>
        <img
          src="/svg/arrow-down.svg"
          alt="arrow-down"
          className={`bg-[var(--ui-dark)] rounded-full p-[1rem] w-[3rem] h-[3rem] cursor-pointer flex justify-center items-center transform transition-transform duration-300 ${
            open ? "rotate-0" : "rotate-90"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setActive((currId) => (currId === id ? null : id));
          }}
        />
      </div>
      <div
        className={`absolute right-0 top-full w-full mt-2 origin-top transition-all duration-300 border border-t-0 border-gray-300 rounded-b-2xl bg-white text-black p-4 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <p className="text-3xl">{answer}</p>
      </div>
    </div>
  );
}
