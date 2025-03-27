import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Professional Business Consulting | Tax Registration Services",
  description:
    "Tax Business Consultants optimize your tax strategy, ensure compliance, and maximize savings. Get expert tips and tricks for effective tax business registration.",
  keywords: ["Startup Consultants in Qatar", "Company Formation in Qatar"],
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
