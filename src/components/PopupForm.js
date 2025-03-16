"use client";

import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function PopupForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success"); // 'success' or 'error'
  const [confirmation, setConfirmation] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const popupClosedTime = localStorage.getItem("popupClosedTime");
    const popupSubmittedTime = localStorage.getItem("popupSubmittedTime");
    const currentTime = new Date().getTime();

    if (popupClosedTime && currentTime - popupClosedTime < 3600000) {
      return; // If closed within the last 1 hour, don't show popup
    }

    if (popupSubmittedTime && currentTime - popupSubmittedTime < 259200000) {
      return; // If submitted within the last 3 days, don't show popup
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // 10 seconds delay
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then((res) => {
        setMessage("Thank you! Your details have been submitted.");
        setMessageType("success");
        localStorage.setItem("popupSubmittedTime", new Date().getTime()); // Store submission time
        setConfirmation(true);
        setTimeout(() => {
          setConfirmation(false);
          setIsVisible(false);
        }, 3000);
      })
      .catch((error) => {
        setMessage("Failed to submit. Please try again.");
        setMessageType("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleClose = () => {
    localStorage.setItem("popupClosedTime", new Date().getTime()); // Store close time
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full backdrop-blur-lg bg-black/30 flex justify-center items-center z-50">
        <div className="bg-(--ui-light) p-10 rounded-2xl shadow-xl max-w-lg w-full relative text-center">
          <h2 className="text-3xl font-semibold mb-4 text-(--ui-dark)">
            Looking to Start a Business in Qatar?
          </h2>
          <p className="text-md text-gray-600 mb-6">Get a call back from us.</p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--ui-dark)"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--ui-dark)"
              required
            />
            <button
              type="submit"
              className="bg-(--ui-dark) text-white py-3 px-6 rounded-lg hover:bg-opacity-80 transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Request a Call Back"}
            </button>
          </form>
          {message && (
            <p
              className={`mt-4 text-sm ${
                messageType === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
          >
            ✖
          </button>
        </div>
      </div>
      {confirmation && (
        <div className="fixed bottom-5 right-5 bg-(--ui-dark) text-white py-3 px-6 rounded-lg shadow-lg text-sm animate-fade-in-out">
          We have received your number. We will get back to you soon.
        </div>
      )}
    </>
  );
}
