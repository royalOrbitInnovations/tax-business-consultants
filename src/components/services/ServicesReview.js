import ReviewBG from "./ReviewBG";
import ReviewContent from "./ReviewContent";

export default function ServicesReview() {
  return (
    <div className="relative px-[20rem] max-14xl:px-[15rem] max-10xl:px-[10rem] max-6xl:px-[5rem] py-[5rem] w-[100vw] overflow-hidden h-[70vh]">
      <ReviewBG />
      <ReviewContent />
    </div>
  );
}
