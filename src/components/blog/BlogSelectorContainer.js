import BlogPostSelector from "./BlogPostSelector";

const data = [
  {
    id: 1,
    image: "/images/blog-images/blog-image-1.webp",
    heading:
      "How Business Consultants in Qatar Assist with Strategic Growth & Expansion",
    excerpt:
      "Tax Business Consultants is among the top consultant companies in Qatar and offers business entities professional advice according to the expansion of their market. With our expertise within the industry, we understand the unique hurdles that businesses in Qatar encounter and devise workable strategies to attain....",
  },
  {
    id: 2,
    image: "/images/blog-images/blog-image-1.webp",
    heading:
      "How Business Consultants in Qatar Assist with Strategic Growth & Expansion",
    excerpt:
      "Tax Business Consultants is among the top consultant companies in Qatar and offers business entities professional advice according to the expansion of their market. With our expertise within the industry, we understand the unique hurdles that businesses in Qatar encounter and devise workable strategies to attain....",
  },
  {
    id: 3,
    image: "/images/blog-images/blog-image-1.webp",
    heading:
      "How Business Consultants in Qatar Assist with Strategic Growth & Expansion",
    excerpt:
      "Tax Business Consultants is among the top consultant companies in Qatar and offers business entities professional advice according to the expansion of their market. With our expertise within the industry, we understand the unique hurdles that businesses in Qatar encounter and devise workable strategies to attain....",
  },
  {
    id: 4,
    image: "/images/blog-images/blog-image-1.webp",
    heading:
      "How Business Consultants in Qatar Assist with Strategic Growth & Expansion",
    excerpt:
      "Tax Business Consultants is among the top consultant companies in Qatar and offers business entities professional advice according to the expansion of their market. With our expertise within the industry, we understand the unique hurdles that businesses in Qatar encounter and devise workable strategies to attain....",
  },
  {
    id: 5,
    image: "/images/blog-images/blog-image-1.webp",
    heading:
      "How Business Consultants in Qatar Assist with Strategic Growth & Expansion",
    excerpt:
      "Tax Business Consultants is among the top consultant companies in Qatar and offers business entities professional advice according to the expansion of their market. With our expertise within the industry, we understand the unique hurdles that businesses in Qatar encounter and devise workable strategies to attain....",
  },
  {
    id: 6,
    image: "/images/blog-images/blog-image-1.webp",
    heading:
      "How Business Consultants in Qatar Assist with Strategic Growth & Expansion",
    excerpt:
      "Tax Business Consultants is among the top consultant companies in Qatar and offers business entities professional advice according to the expansion of their market. With our expertise within the industry, we understand the unique hurdles that businesses in Qatar encounter and devise workable strategies to attain....",
  },
];

export default function BlogSelectorContainer() {
  return (
    <div className="relative mx-[20rem] py-[6rem] mb-[5rem] grid grid-cols-3 gap-[5rem] max-15xl:grid-cols-2 max-15xl:justfiy-center max-15xl:justify-items-center max-15xl:gap-[2rem] max-10xl:mx-[10rem] max-6xl:mx-[5rem] max-6xl:grid-cols-1">
      {data.map((item) => (
        <BlogPostSelector key={item.id} blog={item} />
      ))}

      <div className="absolute flex gap-[2rem] bottom-0 right-0">
        <button className="border border-(--ui-dark) rounded-[10px] px-[2rem] py-[1rem] text-3xl hover:bg-(--ui-dark) hover:scale-110 hover:text-white transition-all duration-300 cursor-pointer">
          Previous
        </button>
        <button className="border border-(--ui-dark) rounded-[10px] px-[2rem] py-[1rem] text-3xl hover:bg-(--ui-dark) hover:scale-110 hover:text-white transition-all duration-300 cursor-pointer">
          Next
        </button>
      </div>
    </div>
  );
}
