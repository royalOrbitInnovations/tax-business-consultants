import PageBanner from "@/components/PageBanner";
import FAQ from "@/components/FAQ/FAQ";
import PreFooterBanner from "@/components/PreFooterBanner";
import ServiceExplanations from "@/components/services/ServiceExplanations";
import ServicesReview from "@/components/services/ServicesReview";
import InitialPageText from "@/components/InitialPageText";
import Head from "next/head";

export default function Services() {
  return (
    <>
      <Head>
        <title>
          Comprehensive Tax Services in Qatar | Corporate & Individual Tax
          Solutions
        </title>
        <meta
          name="description"
          content="Discover our range of tax services in Qatar, including corporate tax filing, VAT compliance, tax advisory, and financial planning for both businesses and individuals."
        />
      </Head>

      <PageBanner
        image="/images/services-banner-image.webp"
        mainText="Our Services"
        currentPage="Services"
      />
      <InitialPageText
        heading="Empowering Businesses With Strategic Growth Solutions"
        text="Our track record speaks volumes, consistently surpassing client        expectations with exceptional results. Committed to delivering unparalleled customer service, we strive to uphold the highest standards in all aspects of our engagements, including business formation in Qatar. As the premier company specializing in advanced business startup and management consulting services in Qatar, we have catered to diverse clients from around the globe."
      />
      <ServiceExplanations />
      <ServicesReview />
      <FAQ />
      <PreFooterBanner />
    </>
  );
}
