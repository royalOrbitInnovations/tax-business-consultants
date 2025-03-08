"use client";
import { useState } from "react";
import QABlock from "./QABlock";

export default function QuestionBox({ questionSet }) {
  const [active, setActive] = useState(0);
  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.values(questionSet).map((set, index) => (
        <QABlock
          key={index}
          id={index + 1}
          question={set.question}
          answer={set.answer}
          open={active === index + 1}
          setActive={setActive}
        />
      ))}
    </div>
  );
}
