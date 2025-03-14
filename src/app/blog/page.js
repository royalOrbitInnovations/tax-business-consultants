import BlogSelectorContainer from "@/components/blog/BlogSelectorContainer";
import SearchBar from "@/components/SearchBar";
import PageBanner from "@/components/PageBanner";
import PreFooterBanner from "@/components/PreFooterBanner";
import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>
          Tax Consultancy Insights in Qatar | Expert Tax Advice Blog
        </title>
        <meta
          name="description"
          content="Explore our blog for the latest insights on tax regulations, compliance updates, and expert tax advice tailored for businesses and individuals in Qatar."
        />
      </Head>

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
