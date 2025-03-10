"use client";

import Link from "next/link";

export default function ContactButtons() {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-2 z-50">
      {/* Phone Button */}
      <Link
        href="tel:+1234567890"
        className=" flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
      >
        <img src="/svg/phone.svg" alt="Phone" className="w-[5rem] h-[5rem]" />
      </Link>

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
      >
        <img
          src="/svg/whatsapp.svg"
          alt="WhatsApp"
          className="w-[5rem] h-[5rem]"
        />
      </Link>

      {/* Email Button */}
      <Link
        href="mailto:example@example.com"
        className="flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
      >
        <img src="/svg/email.svg" alt="Email" className="w-[5rem] h-[5rem]" />
      </Link>
    </div>
  );
}
