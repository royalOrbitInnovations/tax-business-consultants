import SectionHeading from "../SectionHeading";
import TextWithBorder from "../TextWithBorder";
import FAQBlock from "./FAQBlock";

export default function FAQ({ bg }) {
  return (
    <div
      className="px-[20rem] max-10xl:px-[15rem] max-6xl:px-[5rem] py-[10rem]"
      style={{ backgroundColor: bg ? bg : "var(--ui-light)" }}
    >
      <TextWithBorder text="FAQ's" />
      <SectionHeading heading="Excellent Service Provided by Our Superb Consultant." />
      <FAQBlock />
    </div>
  );
}
