export default function FAQDisplayer({ question, answer, isOpen, onClick }) {
  return (
    <div
      className="bg-white p-[3rem]"
      style={{ fontFamily: "var(--font-secondary)" }}
    >
      <div className="flex justify-between cursor-pointer" onClick={onClick}>
        <h3
          className="text-3xl font-bold"
          style={{ color: isOpen ? "var(--ui-dark)" : "" }}
        >
          {question}
        </h3>
        <img
          className="transition-all duration-300"
          src="/svg/arrow-down-full.svg"
          alt="Toggle Answer"
          style={{ transform: isOpen ? "rotate(0deg)" : "rotate(-50deg)" }}
        />
      </div>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "500px" : "0px" }}
      >
        <p
          className={`text-3xl pt-[3rem] transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}
