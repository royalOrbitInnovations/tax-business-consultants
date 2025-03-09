import SectionHeading from "../SectionHeading";
import TextWithBorder from "../TextWithBorder";
import FAQBlock from "./FAQBlock";

export default function FAQ() {
  return (
    <div className="px-[20rem] bg-(--ui-light) py-[5rem]">
      <TextWithBorder text="FAQ's" />
      <SectionHeading heading="Excellent Service Provided by Our Superb Consultant." />
      <FAQBlock />
    </div>
  );
}
