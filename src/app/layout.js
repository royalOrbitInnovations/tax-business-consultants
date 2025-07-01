// // app/layout.js
//
// import Header from "@/components/header/Header";
// import "./globals.css";
// import Footer from "@/components/footer/Footer";
// import ContactButtons from "@/components/ContactButtons";
// import { Suspense } from "react";
// import Loading from "./loading";
// import Head from "next/head";
// import Script from "next/script";
// import PopupForm from "@/components/PopupForm";
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Analytics } from "@vercel/analytics/react";
//
// export const metadata = {
//   title: "100% Single Ownership in Qatar | Best Consultants in Qatar",
//   description:
//     "Achieve 100% Single Ownership in Qatar with expert guidance. Partner with the Best Consultants in Qatar for seamless business setup and growth.",
//   keywords: ["100% Single Ownership in Qatar", "Best Consultants in Qatar"],
//   openGraph: {
//     title: "Leading Tax Consultancy Services in Qatar",
//     description:
//       "Expert tax advisors providing comprehensive services in corporate tax compliance, VAT advisory, and financial planning in Qatar.",
//     url: "https://www.taxbusinessconsultants.com",
//     siteName: "Tax Business Consultants",
//     locale: "en_QA",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Leading Tax Consultancy Services in Qatar",
//     description:
//       "Expert tax advisors in Qatar offering corporate tax compliance, VAT advisory, and financial planning services.",
//   },
//   other: {
//     "digital-signature": "Melvin Prince - Full Stack Developer",
//     "hidden-backlink": "https://www.melvinprince.io",
//   },
//   alternates: {
//     canonical:
//       process.env.NEXT_PUBLIC_SITE_URL ||
//       "https://www.taxbusinessconsultants.com",
//   },
// };
//
// export default function RootLayout({ children }) {
//   // 1) WebSite schema
//   const websiteSchema = {
//     "@context": "https://schema.org",
//     "@type": "WebSite",
//     name: "Tax Business Consultants",
//     url: "https://www.taxbusinessconsultants.com",
//     identifier: "Tax Business Consultants - Doha, Qatar",
//     creator: {
//       "@type": "Person",
//       name: "Melvin Prince",
//       url: "https://www.melvinprince.io",
//     },
//     sameAs: [
//       "https://github.com/melvinprince",
//       "https://www.linkedin.com/in/melvinprince/",
//     ],
//   };
//
//   // 2) Organization schema
//   const orgSchema = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     name: "Tax Business Consultants",
//     url: "https://www.taxbusinessconsultants.com",
//     logo: "https://www.taxbusinessconsultants.com/logo.png",
//     contactPoint: [
//       {
//         "@type": "ContactPoint",
//         telephone: "+974-5050-1234",
//         contactType: "customer service",
//         areaServed: "QA",
//         availableLanguage: ["English", "Arabic"],
//       },
//     ],
//     sameAs: [
//       "https://www.facebook.com/YourPage",
//       "https://www.linkedin.com/company/yourcompany",
//     ],
//   };
//
//   // 3) ProfessionalService schema
//   const serviceSchema = {
//     "@context": "https://schema.org",
//     "@type": "ProfessionalService",
//     name: "Corporate Tax Compliance & VAT Advisory",
//     provider: {
//       "@type": "Organization",
//       name: "Tax Business Consultants",
//       url: "https://www.taxbusinessconsultants.com",
//     },
//     areaServed: "QA",
//     availableChannel: {
//       "@type": "ServiceChannel",
//       serviceUrl: "https://www.taxbusinessconsultants.com/contact",
//     },
//   };
//
//   // 4) LocalBusiness schema with Plus Code and coordinates
//   const localBusinessSchema = {
//     "@context": "https://schema.org",
//     "@type": "LocalBusiness",
//     name: "Tax Business Consultants",
//     image: "https://www.taxbusinessconsultants.com/logo.png",
//     url: "https://www.taxbusinessconsultants.com",
//     telephone: "+974-5050-1234",
//     address: {
//       "@type": "PostalAddress",
//       streetAddress: "7GJ2+HM Doha, Qatar",
//       addressLocality: "Doha",
//       addressRegion: "Doha",
//       postalCode: "00000",
//       addressCountry: "QA",
//     },
//     geo: {
//       "@type": "GeoCoordinates",
//       latitude: 25.28545,
//       longitude: 51.53104,
//     },
//     openingHoursSpecification: [
//       {
//         "@type": "OpeningHoursSpecification",
//         dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
//         opens: "09:00",
//         closes: "17:00",
//       },
//     ],
//   };
//
//   // Combine all schemas
//   const structuredData = [
//     websiteSchema,
//     orgSchema,
//     serviceSchema,
//     localBusinessSchema,
//   ];
//
//   return (
//     <html lang="en">
//       <SpeedInsights />
//       <Analytics />
//       <Head>
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
//         <meta name="keywords" content={metadata.keywords.join(", ")} />
//         <meta
//           name="google-site-verification"
//           content="tnTlQmzVOVpS_MrvgjyAY0CuVar_Ne9OTRZ2fafCNRI"
//         />
//         <meta property="og:title" content={metadata.openGraph.title} />
//         <meta
//           property="og:description"
//           content={metadata.openGraph.description}
//         />
//         <meta property="og:url" content={metadata.openGraph.url} />
//         <meta property="og:site_name" content={metadata.openGraph.siteName} />
//         <meta name="twitter:card" content={metadata.twitter.card} />
//         <meta name="twitter:title" content={metadata.twitter.title} />
//         <meta
//           name="twitter:description"
//           content={metadata.twitter.description}
//         />
//
//         {/* Structured Data (Schema.org) */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(structuredData),
//           }}
//         />
//       </Head>
//
//       {/* Google Analytics: Load after the page is interactive */}
//
//       <Script
//         id="google-analytics"
//         strategy="afterInteractive"
//         src="https://www.googletagmanager.com/gtag/js?id=G-MBS0SC76G2"
//       />
//
//       <Script id="google-analytics-inline" strategy="afterInteractive">
//         {`
//     window.dataLayer = window.dataLayer || [];
//     function gtag(){dataLayer.push(arguments);}
//     gtag('js', new Date());
//
//     // Add both tags here
//     gtag('config', 'G-MBS0SC76G2'); // Existing
//     gtag('config', 'G-6EWEWLL5N8'); // New Tag
//
//   `}
//       </Script>
//
//       <body>
//         <Header />
//         <Suspense fallback={<Loading />}>{children}</Suspense>
//         <ContactButtons />
//         <PopupForm />
//         <Footer />
//       </body>
//     </html>
//   );
// }

import Header from "@/components/header/Header";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import ContactButtons from "@/components/ContactButtons";
import { Suspense } from "react";
import Loading from "./loading";
import Head from "next/head";
import PopupForm from "@/components/PopupForm";

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
  verification: {
    google: "tnTlQmzVOVpS_MrvgjyAY0CuVar_Ne9OTRZ2fafCNRI",
  },
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
