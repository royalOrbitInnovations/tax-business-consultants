import BlogSelectorContainer from "@/components/blog/BlogSelectorContainer";
import SearchBar from "@/components/SearchBar";
import PageBanner from "@/components/PageBanner";
import PreFooterBanner from "@/components/PreFooterBanner";
import Head from "next/head";

export default function Blog() {
  return (
    <>
      <PageBanner
        image="/images/blog-banner.webp"
        mainText="News & Insight"
        currentPage="Blog"
      />
      <SearchBar type="user" />
      <BlogSelectorContainer />
      <PreFooterBanner />
    </>
  );
}
