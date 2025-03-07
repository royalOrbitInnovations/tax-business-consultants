import TextWithBorder from "../TextWithBorder";
import PostsSection from "./PostsSection";

export default function NewsAndInsights() {
  return (
    <div className="mt-[10rem] px-[20rem] relative">
      <TextWithBorder text="News & Insight" />
      <h2 className="text-[6rem]/25 w-[60%] mt-[4rem]">
        The Latest News and Insights in the field of Tax Busines Consultant
      </h2>
      <button className="flex items-center text-4xl border border-(--ui-dark) rounded-[50px] px-[2rem] py-[.5rem] absolute right-[20rem]">
        Explore More
        <img
          src="/svg/arrorw-top-right-tax-business-consultants.svg"
          alt="Aroow"
        />
      </button>
      <hr className="mt-[7rem] border-t-2 border-gray-200" />
      <PostsSection />
    </div>
  );
}
