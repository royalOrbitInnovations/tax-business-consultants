"use client";

import Image from "next/image";
import Script from "next/script";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ContactForm from "./ContactForm";
import OverlayMessage from "./OverlayMessage";

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState({
    message: "",
    type: "", // "success" or "error"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Clear the overlay message after 3 seconds.
  useEffect(() => {
    if (submissionStatus.message) {
      const timer = setTimeout(() => {
        setSubmissionStatus({ message: "", type: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Determine dynamic classes based on submission status.
  const formBorderClass =
    submissionStatus.type === "success"
      ? "border-green-600"
      : submissionStatus.type === "error"
      ? "border-red-600"
      : "border-gray-200";

  const buttonClass =
    submissionStatus.type === "success"
      ? "bg-green-600 hover:bg-green-500"
      : submissionStatus.type === "error"
      ? "bg-red-600 hover:bg-red-500"
      : "bg-(--ui-dark) hover:bg-(--ui-light)/10";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Retrieve the reCAPTCHA token from the widget.
    const recaptchaToken = document.querySelector(
      '[name="g-recaptcha-response"]'
    )?.value;

    if (!recaptchaToken) {
      setSubmissionStatus({
        message: "Please complete the captcha.",
        type: "error",
      });
      setIsSubmitting(false);
      return;
    }

    const data = { ...formData, recaptchaToken };
    console.log("Submitting captcha verification request:", data);

    try {
      // Send data to backend for captcha verification.
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("Backend response:", result);

      if (response.ok) {
        // If captcha is verified, send email using EmailJS (client-side)
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            formRef.current,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID
          )
          .then((res) => {
            console.log("Email successfully sent!", res.text);
            setSubmissionStatus({
              message: "Email sent successfully!",
              type: "success",
            });
            setIsSubmitting(false);
          })
          .catch((error) => {
            console.error("Email sending error:", error);
            setSubmissionStatus({
              message: "Failed to send email.",
              type: "error",
            });
            setIsSubmitting(false);
          });
      } else {
        setSubmissionStatus({
          message: result.message || "Captcha verification failed.",
          type: "error",
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error during submission:", error);
      setSubmissionStatus({
        message: "Submission error.",
        type: "error",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="relative h-[100vh] w-[100vw]">
        <Image
          src="/images/conatcts-bg.webp"
          fill
          className="object-cover"
          alt="Contact BG"
        />
      </div>

      {/* Load the Google reCAPTCHA script */}
      <Script src="https://www.google.com/recaptcha/api.js" async defer />

      {/* Main content container */}
      <div className="top-[50%] translate-y-[-50%] absolute left-0 w-full flex max-10xl:flex-col gap-[5rem] items-center max-10xl:pt-[13rem] max-5xl:pt-[3rem] max-10xl:overflow-hidden max-10xl:pb-[5rem]">
        <h2 className="ml-[20rem] max-14xl:ml-[10rem] text-[7rem] max-10xl:text-[5rem] max-10xl:ml-0 max-6xl:px-[5rem]">
          If you need any consult, How can we help you?
        </h2>
        <ContactForm
          formRef={formRef}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          formBorderClass={formBorderClass}
          buttonClass={buttonClass}
        />
      </div>

      {/* Overlay Message */}
      {submissionStatus.message && (
        <OverlayMessage submissionStatus={submissionStatus} />
      )}
    </div>
  );
}
