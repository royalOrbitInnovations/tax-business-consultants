"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";

// only load on client
const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });

export default function PopupForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    countryCode: "in",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");
  const [confirmation, setConfirmation] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const closed = localStorage.getItem("popupClosedTime");
    const submitted = localStorage.getItem("popupSubmittedTime");
    const now = Date.now();

    if (closed && now - closed < 3600_000) return; // closed within 1h
    if (submitted && now - submitted < 259_200_000) return; // submitted within 3d

    const timer = setTimeout(() => setIsVisible(true), 10_000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      setMessage("Thank you! Your details have been submitted.");
      setMessageType("success");
      localStorage.setItem("popupSubmittedTime", Date.now());
      setConfirmation(true);
      setTimeout(() => {
        setConfirmation(false);
        setIsVisible(false);
      }, 3000);
    } catch {
      setMessage("Failed to submit. Please try again.");
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    localStorage.setItem("popupClosedTime", Date.now());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* overlay */}
      <div className="fixed inset-0 backdrop-blur-lg bg-black/30 flex justify-center items-center z-[5000] ">
        {/* modal */}
        <div className="bg-[var(--ui-light)] rounded-2xl shadow-xl w-[36rem] max-w-full relative text-center p-[4rem]">
          {/* close */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
          >
            ✖
          </button>

          {/* title */}
          <h2 className="text-4xl font-semibold mb-5 text-[var(--ui-dark)]">
            Looking to Start a Business in Qatar?
          </h2>
          <p className="text-xl text-gray-600 mb-6">Get a call back from us.</p>

          {/* form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {/* name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-[4rem] border border-gray-300 bg-white text-[var(--ui-dark)] placeholder-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--ui-dark)] text-lg"
              required
            />

            {/* phone */}
            <PhoneInput
              country={formData.countryCode}
              value={formData.phone}
              countryCodeEditable={false}
              onChange={(value, data) =>
                setFormData((p) => ({
                  ...p,
                  phone: value,
                  countryCode: data.countryCode.toLowerCase(),
                }))
              }
              inputProps={{
                name: "phone",
                required: true,
                placeholder: "Your Phone Number",
              }}
              containerClass="w-full"
              inputClass="w-full h-[5rem] border border-gray-300 bg-white text-[var(--ui-dark)] placeholder-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--ui-dark)] text-lg"
              dropdownClass="rounded-lg border-gray-200"
            />

            {/* hidden for country */}
            <input
              type="hidden"
              name="countryCode"
              value={formData.countryCode.toUpperCase()}
            />

            {/* submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[var(--ui-dark)] text-white py-2 rounded-lg text-2xl font-bold mt-[2rem] hover:bg-opacity-90 transition disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Request a Call Back"}
            </button>
          </form>

          {/* inline message */}
          {message && (
            <p
              className={`mt-4 text-sm ${
                messageType === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>

      {/* toast */}
      {confirmation && (
        <div className="fixed bottom-5 right-5 bg-[var(--ui-dark)] text-white py-2 px-4 rounded-lg shadow-lg text-sm animate-fade-in-out">
          We have received your number. We will get back to you soon.
        </div>
      )}
    </>
  );
}
