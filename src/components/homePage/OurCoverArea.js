import TextWithBorder from "../TextWithBorder";
import OurCoverAreaSlider from "./OurCoverAreaSlider";

export default function OurCoverArea() {
  return (
    <>
      <div className="relative pl-[20rem] max-14xl:pl-[15rem] mt-[5rem]">
        <TextWithBorder text="Our Cover Area" />
        <h2 className="pt-[4rem] pb-[6rem] text-[4rem]/18 w-[50%] max-14xl:w-[70%]">
          Conduct market research to understand industry trends, competition and
          customer behaviour.
        </h2>
        <OurCoverAreaSlider />
      </div>
      <div className="mt-[40rem] mx-[1rem] w-[90%] max-14xl:w-[80%] h-[2rem] border-t-5 border-(--ui-dark) relative">
        <div className="flex gap-[2rem] absolute right-[-14rem] top-0 translate-y-[-50%]">
          <img
            src="/svg/arrow-left-tax-business-consultants.svg"
            alt="Arrow Left"
            className="border rounded-[50%] p-[1rem] cursor-pointer"
          />
          <img
            src="/svg/arrow-right-tax-business-consultants.svg"
            alt="Arrow Right"
            className="border rounded-[50%] p-[1rem] cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
