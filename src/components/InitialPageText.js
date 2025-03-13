import SectionHeading from "./SectionHeading";

export default function InitialPageText({ heading, text }) {
  return (
    <div className="px-[20rem] max-10xl:px-[15rem] max-6xl:px-[10rem] max-5xl:px-[5rem] py-[5rem]">
      <SectionHeading heading={heading} />
      {text && <p className="text-4xl">{text}</p>}
    </div>
  );
}
