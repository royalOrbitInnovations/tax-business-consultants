import SectionHeading from "../SectionHeading";
import TextWithBorder from "../TextWithBorder";
import FAQBlock from "./FAQBlock";

export default function FAQ() {
  return (
    <div className="px-[20rem] max-10xl:px-[15rem] max-6xl:px-[5rem] bg-(--ui-light) py-[10rem]">
      <TextWithBorder text="FAQ's" />
      <SectionHeading heading="Excellent Service Provided by Our Superb Consultant." />
      <FAQBlock />
    </div>
  );
}
