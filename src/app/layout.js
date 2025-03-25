import Header from "@/components/header/Header";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import ContactButtons from "@/components/ContactButtons";
import { Suspense } from "react";
import Loading from "./loading";
import Head from "next/head";
import PopupForm from "@/components/PopupForm";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

// Define metadata for the homepage
export const metadata = {
  title: "Leading Tax Consultancy Services in Qatar | Expert Tax Advisors",
  description:
    "Offering comprehensive tax consultancy services in Qatar, including corporate tax compliance, VAT advisory, and financial planning for businesses and individuals.",
  keywords: [
    "tax consultancy Qatar",
    "corporate tax compliance",
    "VAT advisory Qatar",
    "financial planning services",
  ],
  openGraph: {
    title: "Leading Tax Consultancy Services in Qatar",
    description:
      "Expert tax advisors providing comprehensive services in corporate tax compliance, VAT advisory, and financial planning in Qatar.",
    url: "https://www.taxbusinessconsultants.com",
    siteName: "Tax Business Consultants",
    locale: "en_QA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leading Tax Consultancy Services in Qatar",
    description:
      "Expert tax advisors in Qatar offering corporate tax compliance, VAT advisory, and financial planning services.",
  },
  other: {
    "digital-signature": "Melvin Prince - Full Stack Developer",
    "hidden-backlink": "https://www.melvinprince.io",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tax Business Consultants",
    url: "https://www.taxbusinessconsultants.com",
    identifier: "Tax Business Consultants - Doha, Qatar",
    creator: {
      "@type": "Person",
      name: "Melvin Prince",
      url: "https://www.melvinprince.io",
    },
    sameAs: [
      "https://github.com/melvinprince",
      "https://www.linkedin.com/in/melvinprince/",
    ],
  };

  return (
    <html lang="en">
      <SpeedInsights />
      <Analytics />
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body>
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <ContactButtons />
        <PopupForm />
        <Footer />
      </body>
    </html>
  );
}
