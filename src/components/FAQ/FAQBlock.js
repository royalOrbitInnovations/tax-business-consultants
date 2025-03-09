"use client";

import { useState } from "react";
import FAQDisplayer from "./FAQDisplayer";

const data = [
  {
    question: "How can this company help my business with its startup needs?",
    answer:
      "Our company specializes in providing comprehensive startup solutions, including strategic planning, market analysis, and financial modeling, to help businesses successfully launch their ventures.",
  },
  {
    question:
      "What sets this company apart from other consulting firms in Qatar",
    answer:
      "What sets us apart is our deep understanding of the local market, extensive industry experience, and a diverse team of consultants who bring diverse perspectives and innovative approaches to every project.",
  },
  {
    question:
      "Is the company's consulting services suitable for businesses from different industries and locations?",
    answer:
      "Yes, our consulting services are designed to cater to businesses across various industries and geographical locations. We ensure effective results regardless of the industry or location.",
  },
];

export default function FAQBlock() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-[2rem]">
      {data.map((item, index) => (
        <FAQDisplayer
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
