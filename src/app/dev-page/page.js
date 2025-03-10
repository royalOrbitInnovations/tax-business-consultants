import ConatctAndMap from "@/components/contactUs/ConatctAndMap";
import InitialPageText from "@/components/InitialPageText";
import PageBanner from "@/components/PageBanner";

export default function ContactUs() {
  return (
    <>
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
    </>
  );
}

// import ArrowIcon from "../svg/arrow-down-full.svg";
// <ArrowIcon className="transition-all duration-300" />
