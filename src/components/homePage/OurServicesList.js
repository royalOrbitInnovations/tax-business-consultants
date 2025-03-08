const data = [
  "Assurance & Accounting Services",
  "Accounting & Bookkeeping",
  "Auditing Services",
  "Start-ip Business Services",
  "Management Consulting",
  "Internal and External Tax Agent",
];

export default function OurServicesList() {
  return (
    <ul>
      {data.map((item, index) => (
        <li
          key={index}
          className="flex gap-[1rem] pb-[2rem] max-14xl:pb-[1rem] text-4xl font-bold"
        >
          <img
            src="/svg/arrow-fill.svg"
            alt="filled-arrow"
            className=" h-[2rem] w-[2rem]"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
