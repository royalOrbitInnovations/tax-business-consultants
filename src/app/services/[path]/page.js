export default async function ServicePage({ params }) {
  // Ensure params is awaited if needed.
  const resolvedParams = await Promise.resolve(params);
  const { path } = resolvedParams;
  console.log("Resolved Params:", JSON.stringify(resolvedParams));

  // Define a mapping from the slug to the service details.
  // The content below is based on typical information for each service.
  const services = {
    "100-ownership-business-in-qatar": {
      title: "100% Ownership Business in Qatar",
      content:
        "Unlock the full potential of the Qatari market with 100% foreign ownership of your business.  Recent groundbreaking changes to Qatar's commercial laws now allow foreign investors to maintain complete control and ownership of their companies in numerous sectors, eliminating the previous requirement for a Qatari partner in many cases.  Our expert team provides comprehensive guidance throughout the entire process, from initial feasibility assessment to full operational setup.\n\n**We offer:**\n\n*   **Strategic Sector Analysis:**  We'll help you identify the specific sectors and business activities where 100% ownership is permitted, ensuring your venture aligns with current regulations.\n*   **End-to-End Legal Navigation:** We handle all legal documentation, licensing applications, and registration procedures with the relevant Qatari authorities (Ministry of Commerce and Industry, Qatar Financial Centre, etc.).\n*   **Compliance and Regulatory Updates:**  We keep you informed of any changes to the legal framework and ensure your business remains fully compliant with all applicable laws and regulations.\n*   **Tax Optimization Strategies:** We'll advise on how to leverage Qatar's favorable tax environment to maximize your profitability.\n*   **Long-Term Business Planning:**  We go beyond the initial setup, providing ongoing support and strategic advice to help your business thrive in Qatar's dynamic economy.  This includes market analysis, competitive intelligence, and growth strategies.\n*   **Access to Networks:** Benefit from our established network of contacts within Qatar's business and government sectors.",
    },
    "company-formation-in-qatar": {
      title: "Company Formation in Qatar",
      content:
        "Establish your presence in Qatar with our streamlined company formation service.  We guide you through every step of setting up your business, ensuring a smooth and efficient process, regardless of the complexity. We cater to all types of entities, helping you choose the optimal structure for your needs.\n\n**Our comprehensive service includes:**\n\n*   **Company Structure Selection:**  We'll advise you on the most suitable legal structure for your business, including Limited Liability Company (LLC), Branch Office, Representative Office, Public Shareholding Company, and others, outlining the advantages and disadvantages of each.\n*   **Name Reservation and Approval:**  We'll handle the crucial first step of securing your desired company name, ensuring it complies with Qatari regulations.\n*   **Articles of Association and Memorandum of Association:**  We'll assist in drafting and preparing these essential legal documents, tailored to your specific business activities and ownership structure.\n*   **Capital Requirements and Bank Account Setup:**  We provide clear guidance on the minimum capital requirements for your chosen company type and facilitate the opening of a corporate bank account.\n*   **Registration with Relevant Authorities:** We manage the complete registration process with the Ministry of Commerce and Industry, Qatar Financial Centre (QFC), or other relevant authorities, depending on your business activity and chosen jurisdiction.\n*   **Licensing and Permits:** We secure all necessary licenses and permits required for your business to operate legally in Qatar.\n*   **Post-Formation Support:** Our services extend beyond the initial setup, offering ongoing assistance with compliance, renewals, and amendments.",
    },
    "pro-services-in-qatar": {
      title: "PRO Services in Qatar",
      content:
        "Navigate Qatar's administrative landscape efficiently with our expert Public Relations Officer (PRO) services.  We act as your dedicated liaison with government departments, ensuring all your company's administrative and regulatory requirements are met promptly and accurately.  This allows you to focus on your core business activities, freeing you from time-consuming bureaucratic processes.\n\n**Our PRO services encompass:**\n\n*   **Visa Processing (Employment & Family):**  We manage the entire visa process for your employees and their families, including applications, renewals, cancellations, and medical check-ups.\n*   **Labor Card and Immigration Card Processing:**  We secure and maintain all necessary labor and immigration cards for your workforce, ensuring compliance with Qatari labor laws.\n*   **Document Clearance and Attestation:**  We handle the authentication and legalization of documents from various ministries and government agencies, saving you significant time and effort.\n*   **Trade License Renewals:**  We ensure your trade license is renewed on time, avoiding any potential penalties or disruptions to your business operations.\n*   **Government Approvals and Permits:**  We obtain all necessary approvals and permits for various business activities, such as environmental permits, municipality approvals, and more.\n*   **Regular Updates on Regulatory Changes:** We keep you informed of any changes to Qatari laws and regulations that may affect your business.\n*   **Dedicated PRO Support:** You'll have a dedicated PRO consultant assigned to your company, providing personalized and responsive service.",
    },
    "business-consultancy-services": {
      title: "Business Consultancy Services",
      content:
        "Gain a competitive edge in the Qatari market with our comprehensive business consultancy services.  We provide tailored solutions to help your business thrive, whether you're a startup, an SME, or a multinational corporation.  Our experienced consultants offer strategic insights and practical advice across a wide range of business functions.\n\n**Our consultancy services include:**\n\n*   **Market Entry Strategy:**  We develop a comprehensive market entry strategy, including market research, competitor analysis, and identification of target customers.\n*   **Business Plan Development:**  We assist in creating a robust business plan that outlines your business objectives, strategies, and financial projections.\n*   **Strategic Planning and Implementation:**  We work with you to define your long-term vision and develop actionable strategies to achieve your goals.\n*   **Operational Efficiency Improvement:**  We identify areas for improvement in your operations, streamlining processes and maximizing productivity.\n*   **Financial Management and Advisory:**  We provide expert advice on financial planning, budgeting, forecasting, and investment strategies.\n*   **Risk Management and Mitigation:**  We help you identify and assess potential risks to your business and develop strategies to mitigate them.\n*   **Human Resources Consulting:**  We offer guidance on recruitment, training, performance management, and compliance with Qatari labor laws.\n*   **Digital Transformation:** We help you leverage technology to improve your business processes and enhance your customer experience. We provide specific recommendations for appropriate technologies.\n* **Sustainability and Corporate Social Responsibility (CSR) Consulting:** We will advise you on incorporating sustainability best practice into your business.",
    },
    "local-sponsorships": {
      title: "Local Sponsorships",
      content:
        "While 100% foreign ownership is now possible in many sectors, some business activities in Qatar may still require a local sponsor. Our local sponsorship service helps you navigate this requirement with confidence and security. We connect you with vetted and reliable Qatari individuals or companies who can act as your local sponsor, ensuring full compliance with Qatari law.\n\n**Our service provides:**\n\n*   **Sponsor Vetting and Due Diligence:** We conduct thorough background checks and due diligence on potential sponsors to ensure their credibility and reliability.\n*   **Negotiation of Sponsorship Agreements:** We assist in negotiating fair and transparent sponsorship agreements that protect your interests and clearly define the roles and responsibilities of both parties.\n*   **Legal Compliance:** We ensure that the sponsorship arrangement complies with all applicable Qatari laws and regulations.\n*   **Ongoing Relationship Management:** We facilitate communication and maintain a positive working relationship between you and your sponsor.\n*   **Risk Mitigation:** We help you understand and mitigate any potential risks associated with local sponsorship.\n*   **Clear Exit Strategies:** We build clear exit strategies into the sponsorship agreement, providing flexibility for the future.\n*   **Transparency and Trust:** We prioritize transparency and build trust between you and your local sponsor, fostering a strong and ethical partnership.",
    },
    "document-attestation": {
      title: "Document Attestation",
      content:
        "Ensure the legal validity of your documents in Qatar and internationally with our comprehensive document attestation service. We handle the entire process, from initial verification to final legalization, saving you time and ensuring your documents are accepted by all relevant authorities. Attestation is crucial for a wide range of documents, whether for personal or business use.\n\n**We attest various types of documents, including:**\n\n*   **Educational Certificates:** Degrees, diplomas, transcripts, and other academic credentials.\n*   **Commercial Documents:** Contracts, agreements, invoices, power of attorney, and company registration documents.\n*   **Personal Documents:** Birth certificates, marriage certificates, death certificates, and police clearance certificates.\n*   **Medical Reports:** Ensuring that the reports are accepted by Qatari authorities.\n\n**Our service includes:**\n\n*   **Verification of Document Authenticity:** We verify the authenticity of your documents with the issuing authority.\n*   **Attestation by Relevant Ministries:** We obtain the necessary attestations from the relevant ministries in Qatar, such as the Ministry of Foreign Affairs (MOFA).\n*   **Embassy/Consulate Legalization:** We handle the legalization of your documents by the relevant embassy or consulate, if required for international use.\n*   **Fast and Efficient Service:** We understand the importance of timely attestation and strive to complete the process as quickly as possible.\n*   **Secure Handling of Documents:** We ensure the safe and confidential handling of your valuable documents throughout the entire process.\n*   **Clear Communication and Updates:** We keep you informed of the progress of your attestation request at every stage.",
    },
  };

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
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="leading-relaxed">{service.content}</p>
    </div>
  );
}
