"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function FooterContact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copyMessage, setCopyMessage] = useState({ text: "", id: null });
  const [messageType, setMessageType] = useState("success");
  const formRef = useRef(null);

  const handleSendEmail = async () => {
    if (!email) {
      setMessage("Please enter a valid email.");
      setMessageType("error");
      return;
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        { email },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(() => {
        setMessage("Subscription successful! You'll receive updates soon.");
        setMessageType("success");
        setEmail("");
        setTimeout(() => setMessage(""), 3000);
      })
      .catch(() => {
        setMessage("Failed to subscribe. Please try again.");
        setMessageType("error");
        setTimeout(() => setMessage(""), 3000);
      });
  };

  const handleCopy = async (text, id) => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        setCopyMessage({ text: "Copied!", id });
        setTimeout(() => setCopyMessage({ text: "", id: null }), 2000);
      } catch (err) {
        console.error("Clipboard write failed", err);
      }
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "absolute";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopyMessage({ text: "Copied!", id });
        setTimeout(() => setCopyMessage({ text: "", id: null }), 2000);
      } catch (err) {
        console.error("Fallback copy failed", err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="mt-[4rem] max-15xl:col-span-2 max-14xl:mx-auto max-10xl:cols-span-1 max-10xl:col-start-2 max-10xl:row-start-3 relative">
      <h3 className="text-5xl">Don&apos;t Miss Subscribed</h3>
      <div className="relative">
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-white w-[100%] my-[2rem] h-[4rem] rounded-full p-[1rem]"
        />
        <img
          src="/svg/send.svg"
          alt="send"
          onClick={handleSendEmail}
          className="w-[4rem] absolute top-[50%] translate-y-[-50%] right-3 cursor-pointer"
        />
      </div>
      {message && (
        <p
          className={`absolute top-[-2rem] right-0 bg-(--ui-dark) text-white py-2 px-4 rounded-lg shadow-lg text-sm animate-fade-in-out`}
        >
          {message}
        </p>
      )}
      <div className="flex justify-around gap-[2rem] text-lg">
        <div
          className="flex gap-[1rem] cursor-pointer relative"
          onClick={() => handleCopy("+974 66761700", "phone")}
        >
          <img
            src="/svg/phone.svg"
            alt="phone"
            className="border-r pr-5 w-[3rem] h-[3rem]"
          />
          <p>
            <span>To Enquire More</span> <br />
            <span className="font-semibold">+974 66761700</span>
          </p>
          {copyMessage.id === "phone" && (
            <span className="absolute top-[-1.5rem] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded-lg">
              {copyMessage.text}
            </span>
          )}
        </div>
        <div
          className="flex gap-[1rem] cursor-pointer relative"
          onClick={() => handleCopy("info@tbcqa.com", "email")}
        >
          <img
            src="/svg/email.svg"
            alt="email"
            className="border-r pr-5 w-[4rem] h-[3rem]"
          />
          <p>
            <span>To Send Mail</span> <br />
            <span className="font-semibold">info@tbcqa.com</span>
          </p>
          {copyMessage.id === "email" && (
            <span className="absolute top-[-1.5rem] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded-lg">
              {copyMessage.text}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
