import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Tax Consultancy Insights in Qatar | Expert Tax Advice Blog",
  description:
    "Explore our blog for the latest insights on tax regulations, compliance updates, and expert tax advice tailored for businesses and individuals in Qatar.",
  keywords: [
    "tax regulations Qatar",
    "tax compliance updates",
    "expert tax advice blog",
  ],
  openGraph: {
    title: "Tax Consultancy Insights in Qatar",
    description:
      "Stay updated with our expert tax advice blog covering the latest tax regulations and compliance news in Qatar.",
    url: "https://www.taxbusinessconsultants.com/blog",
    siteName: "Tax Business Consultants",

    locale: "en_QA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax Consultancy Insights in Qatar",
    description:
      "Read our expert tax advice blog for the latest updates on tax regulations and compliance in Qatar.",
  },
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
