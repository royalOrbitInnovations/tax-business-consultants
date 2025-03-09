import EmpoweringBuiness from "@/components/services/EmpoweringBuiness";
import FAQ from "@/components/services/FAQ";
import PreFooterBanner from "@/components/services/PreFooterBanner";
import ServiceExplanations from "@/components/services/ServiceExplanations";
import ServicesBanner from "@/components/services/ServicesBanner";
import ServicesReview from "@/components/services/ServicesReview";

export default function Services() {
  return (
    <div>
      <ServicesBanner />
      <EmpoweringBuiness />
      <ServiceExplanations />
      <ServicesReview />
      <FAQ />
      <PreFooterBanner />
    </div>
  );
}
