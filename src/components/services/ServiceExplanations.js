import ServiceBox from "./ServiceBox";

const data = [
  {
    set1: {
      heading: "Business Startup Consultants",
      image: "/images/services-image-1.webp",
      questionSet: {
        set1: {
          question: "Company Registration Services",
          answer:
            "We handle all the complexities of company registration and ensure your business is set up accurately and efficiently. From choosing the right business structure to obtaining the necessary licenses and permits, we guide you as startup consultants in Qatar",
        },
        set2: {
          question: "Business Plan and Feasibility Studies",
          answer:
            "We offer comprehensive business planning services, guiding you through strategy development, financial projections. Get an objective assessment of your business idea. We analyze market potential, financial viability, and potential risks to help you make informed decisions.",
        },
        set3: {
          question: "Market Research and Analysis",
          answer:
            "Conducting market research and analysis. This is to provide you with valuable insights into your customer base, competition, and industry trends. This data will empower you to make informed decisions about your product or service offerings, marketing strategy, and pricing.",
        },
        set4: {
          question: "Financial Advisory",
          answer:
            "Our financial advisors will provide expert guidance from budgeting and cash flow management to securing funding and managing your tax liabilities.",
        },
        set5: {
          question: "HR Consulting & Financial Advisory",
          answer:
            "Providing HR consulting services that will assist you in recruiting, onboarding, and managing your employees. Offers financial advisory specific to HR concerns.",
        },
        set6: {
          question: "Document Clearance services",
          answer:
            "Secure the necessary permits and licenses to operate legally and smoothly. We take care of all document clearances, ensuring your business complies with regulations and avoids unnecessary delays in company formation in Qatar.",
        },
        set7: {
          question: "PRO service for Corporates and Individuals",
          answer:
            "We navigate the legalities of new businesses. We act as your authorized representative, handling official transactions, applications, and other government related tasks.",
        },
      },
    },
    set2: {
      heading: "Business Management Services",
      image: "/images/services-image-2.webp",
      questionSet: {
        set1: {
          question: "Business Training and empowering services",
          answer:
            "Equip your team with the skills and knowledge they need to excel. We offer a range of training programs and services to help businesses of all sizes thrive. With us, build a high performing team.",
        },
        set2: {
          question: "Branding & Trademark Registration",
          answer:
            "Build a strong brand identity and protect your intellectual property. We will guide you through the branding process and ensure your trademarks are registered securely. Create a brand that resonates with your target audience and sets you apart from the competition.",
        },
        set3: {
          question: "Attestation & Translation services",
          answer:
            "We provide document attestation and translation services to ensure your documents are recognized and accepted globally.",
        },
        set4: {
          question: "Share - Sale/Purchase services",
          answer:
            "Streamline your business transactions. We offer comprehensive support for buying or selling shares in a company. We handle the legal and administrative aspects of the process, ensuring a smooth and efficient transaction.",
        },
        set5: {
          question: "Liquidation & Termination of Business",
          answer:
            "Close your business with confidence. We provide guidance and support throughout the liquidation and termination process. Our team will help you meet all legal requirements and ensure a smooth and efficient closure of your business.",
        },
      },
    },
    set3: {
      heading: "Business Administration Services",
      image: "/images/services-image-3.webp",
      questionSet: {
        set1: {
          question: "Audit & Tax Filings",
          answer:
            "Ensure your business is financially healthy with our comprehensive audit and tax filing services. We handle all aspects, from record keeping to tax calculations and filings to minimizing your risk.",
        },
        set2: {
          question: "Internal & External Audit works",
          answer:
            "Gain valuable insights and strengthen your financial controls with our internal and external audit services. Our experienced professionals offer a comprehensive review of your financial processes. We identify areas for improvement and provide recommendations to optimize efficiency and mitigate risk.",
        },
        set3: {
          question: "Accounting & Bookkeeping",
          answer:
            "We handle your financial back office. Our expert accounting and bookkeeping services provide accurate and timely financial data, allowing you to make informed decisions based on real time insights.",
        },
        set4: {
          question: "Online/offline CFO services",
          answer:
            "Get expert financial guidance without the full time cost. We create reports that give you a clear picture of your financial health, performance metrics, and trends to support informed decision making.",
        },
        set5: {
          question: "ISO certifications & Standardisations",
          answer:
            "Demonstrate your commitment to quality and process improvement with ISO certification. We guide you through the entire process, from selecting the right standard to achieving accreditation.",
        },
      },
    },
    set4: {
      heading: "Data Analytics",
      image: "/images/services-image-4.webp",
      questionSet: {
        set1: {
          question: "Digital Marketing & SEO Rank",
          answer:
            "Upgrade your online presence with our data driven digital marketing and SEO ranking services. Attract, engage, and convert your target audience. We help you to drive organic traffic and boost your search engine visibility.",
        },
        set2: {
          question: "Project Design & Engineering",
          answer:
            "From concept to completion, our team of experts provides comprehensive project design and engineering services. We leverage data insights to optimize your project, ensuring efficiency, functionality, and successful implementation.",
        },
        set3: {
          question: "Data Analysis & Data Visualization",
          answer:
            "Unlock the power of your data with our in-depth data analysis and visualization services. We transform raw data into actionable insights, presented through compelling visualizations that empower informed decision making.",
        },
        set4: {
          question: "Technical System Support",
          answer:
            "Ensure efficient and effective operations with our reliable technical system support. Our team offers comprehensive assistance, troubleshooting any challenges and keeping your systems running smoothly.",
        },
      },
    },
  },
];

export default function ServiceExplanations() {
  const sections = Object.values(data[0]);
  return (
    <>
      {sections.map((section, index) => (
        <ServiceBox
          key={index}
          heading={section.heading}
          questionSet={section.questionSet}
          image={section.image}
          index={index}
        />
      ))}
    </>
  );
}
