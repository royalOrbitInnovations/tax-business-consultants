import BlogPostsDisplay from "@/components/blog/BlogPostDisplay";
import BlogSelectorContainer from "@/components/blog/BlogSelectorContainer";
import SearchBar from "@/components/blog/SearchBar";
import PageBanner from "@/components/PageBanner";
import PreFooterBanner from "@/components/PreFooterBanner";

export default function Blog() {
  return (
    <>
      <PageBanner
        image="/images/blog-banner.webp"
        mainText="News & Insight"
        currentPage="Blog"
      />
      <SearchBar />
      <BlogSelectorContainer />
      <PreFooterBanner />
      {/* <BlogPostsDisplay /> */}
    </>
  );
}
