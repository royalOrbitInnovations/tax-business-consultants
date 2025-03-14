"use client";

import Link from "next/link";

export default function ContactButtons() {
  return (
    <div className="fixed bottom-0 right-5 flex flex-col gap-[2rem] z-50 bg-(--ui-dark) rounded-t-full py-[2rem] px-[1.5rem]">
      {/* Phone Button */}
      <Link
        href="tel:66761700"
        className=" flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
      >
        <img src="/svg/phone.svg" alt="Phone" className="w-[5rem] h-[5rem]" />
      </Link>

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/97466761700"
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
        href="mailto:info@tbcqa.com"
        className="flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
      >
        <img src="/svg/email.svg" alt="Email" className="w-[5rem] h-[5rem]" />
      </Link>
    </div>
  );
}
