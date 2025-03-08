import Image from "next/image";
import QuestionBox from "./QuestionBox";

export default function ServiceBox({ heading, questionSet, image, index }) {
  return (
    <div className="px-[20rem] pt-[5rem] flex gap-[2rem]">
      {index % 2 === 0 ? imageDiv(image) : questionDiv(heading, questionSet)}
      {index % 2 === 0 ? questionDiv(heading, questionSet) : imageDiv(image)}
    </div>
  );
}

function imageDiv(image) {
  return (
    <div className="relative h-[30rem] w-[30%] rounded-2xl overflow-hidden">
      <Image src={image} alt="services-image-1" fill className="object-cover" />
    </div>
  );
}

function questionDiv(heading, questionSet) {
  return (
    <div className="grow">
      <h2 className="flex w-full bg-(--ui-light) h-[5rem] items-center text-[2.6rem] px-[2rem] py-[1rem] mb-[2rem] rounded-2xl">
        <img
          src="/svg/arrow-fill.svg"
          alt="Arrow"
          className="h-[3rem] w-[3rem]"
        />
        {heading}
      </h2>
      <QuestionBox questionSet={questionSet} />
    </div>
  );
}
