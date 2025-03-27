import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { services } from "@/app/lib/servicesData";
import PreFooterBanner from "@/components/PreFooterBanner";

// This function will dynamically generate metadata for each service page
export async function generateMetadata({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const { path } = resolvedParams;
  console.log("Resolved Params:", JSON.stringify(resolvedParams));

  // Get the matching service details based on the slug.
  const service = services[path];

  if (!service) {
    return {
      title: "Service Not Found",
      description: "We couldn't find the service you are looking for.",
    };
  }

  return {
    title: service.metaTitle || service.title,
    description: service.metaDescription,
    keywords: service.metaKeywords,
    openGraph: {
      title: service.metaTitle || service.title,
      description: service.metaDescription,
      url: `https://www.taxbusinessconsultants.com/services/${path}`,
      siteName: "Tax Business Consultants",
      locale: "en_QA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle || service.title,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({ params }) {
  // Ensure params is awaited if needed.
  const resolvedParams = await Promise.resolve(params);
  const { path } = resolvedParams;
  console.log("Resolved Params:", JSON.stringify(resolvedParams));

  // Get the matching service details based on the slug.
  const service = services[path];

  if (!service) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p>We couldn&apos;t find the service you are looking for.</p>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto p-8 pt-[15rem] mb-[5rem]">
        <div className="flex flex-col justify-center items-center border p-[2rem] rounded-[25px] bg-(--ui-light)/20 shadow-2xl hover:scale-102 hover:border-(--ui-light) hover:border-3 transition-all duration-1000">
          <div className="relative h-[30rem] w-full overflow-hidden rounded-[25px] shadow-2xl mb-[5rem]">
            <Image
              src={service.image}
              fill
              alt={service.title}
              className="object-cover object-middle hover:scale-110 transition-all duration-1000"
            />
          </div>
          <h1 className="text-6xl font-bold mb-[4rem] text-shimmer">
            {service.title}
          </h1>
          <div
            className="prose max-w-none text-3xl text-justify p-[2rem]"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            <ReactMarkdown>{service.content}</ReactMarkdown>
          </div>
        </div>
      </div>
      <PreFooterBanner />
    </>
  );
}
