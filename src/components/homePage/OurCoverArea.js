import TextWithBorder from "../TextWithBorder";
import OurCoverAreaSlider from "./OurCoverAreaSlider";

export default function OurCoverArea() {
  return (
    <>
      <div className="relative pl-[20rem] max-14xl:pl-[15rem] max-6xl:px-[5rem] mt-[5rem]">
        <TextWithBorder text="Our Cover Area" />
        <h2 className="pt-[4rem] pb-[6rem] text-[4.5rem]/18 w-[50%] max-14xl:w-[70%] max-6xl:w-[100%]">
          Providing Solutions to Help Business Grow.
        </h2>
        <OurCoverAreaSlider />
      </div>
      <div className="mt-[40rem] max-10xl:mt-[30rem] max-6xl:mt-[35rem] mx-[1rem] w-[90%] max-14xl:w-[80%] max-6xl:w-[70%] h-[2rem] border-t-5 border-(--ui-dark) relative">
        {/* <div className="flex gap-[2rem] absolute right-[-14rem] top-0 translate-y-[-50%]">
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
        </div> */}
      </div>
    </>
  );
}
