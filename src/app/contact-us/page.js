import Contact from "@/components/contact/Contact";
import CallToAction from "@/components/contactUs/CallToAction";
import ConatctAndMap from "@/components/contactUs/ConatctAndMap";
import InitialPageText from "@/components/InitialPageText";
import PageBanner from "@/components/PageBanner";
import Head from "next/head";

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>
          Contact Our Tax Consultants in Qatar | Schedule a Consultation
        </title>
        <meta
          name="description"
          content="Get in touch with our tax consultancy firm in Qatar for expert advice on tax planning, compliance, and advisory services. Schedule your consultation today."
        />
      </Head>

      <PageBanner
        image="/images/contact-us-banner.webp"
        mainText="Conatct Us"
        currentPage="Contact Us"
      />
      <InitialPageText
        heading="Get In Touch : Expert Business Consulting Tailored To You"
        text="We offer a wide range of services, including strategic planning, financial management, marketing, and technology integration. By leveraging the latest industry insights and innovative strategies, we ensure your business stays ahead of the curve."
      />
      <ConatctAndMap />
      <Contact />
      <CallToAction />
    </>
  );
}
