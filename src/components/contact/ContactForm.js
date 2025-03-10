"use client";

export default function ContactForm({
  formRef,
  formData,
  handleChange,
  handleSubmit,
  isSubmitting,
  buttonClass,
}) {
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg w-[70%] max-5xl:w-[90%] mr-[20rem] max-14xl:mr-[10rem] max-10xl:mx-[15rem] grid grid-cols-2 max-5xl:flex max-5xl:flex-col auto-rows-auto gap-[4rem] max-6xl:gap-[2rem] text-3xl p-[4rem]"
      style={{ fontFamily: "var(--font-secondary)" }}
    >
      <div>
        <label className="block text-(--ui-dark) font-medium mb-1">Name*</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border text-gray-600 text-xl border-gray-200 rounded-[25px] px-5 py-3 focus:outline-none focus:ring-2 focus:ring-bg(--ui-dark) transition-all duration-300"
        />
      </div>
      <div>
        <label className="block text-(--ui-dark) font-medium mb-1">
          Work Email*
        </label>
        <input
          type="email"
          name="email"
          placeholder="Your Work Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border text-gray-600 text-xl border-gray-200 rounded-[25px] px-5 py-3 focus:outline-none focus:ring-2 focus:ring-bg(--ui-dark) transition-all duration-300"
        />
      </div>
      <div>
        <label className="block text-(--ui-dark) font-medium mb-1">
          Company Name*
        </label>
        <input
          type="text"
          name="company"
          placeholder="Your Company Name"
          value={formData.company}
          onChange={handleChange}
          className="w-full border text-gray-600 text-xl border-gray-200 rounded-[25px] px-5 py-3 focus:outline-none focus:ring-2 focus:ring-bg(--ui-dark) transition-all duration-300"
        />
      </div>
      <div>
        <label className="block text-(--ui-dark) font-medium mb-1">
          Phone No*
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border text-gray-600 text-xl border-gray-200 rounded-[25px] px-5 py-3 focus:outline-none focus:ring-2 focus:ring-bg(--ui-dark) transition-all duration-300"
        />
      </div>
      <div className="col-span-2 max-5xl:col-span-1">
        <label className="block text-(--ui-dark) font-medium mb-1">
          Write Message*
        </label>
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full h-[25rem] max-6xl:h-[20rem] border text-gray-600 text-xl border-gray-200 rounded-[25px] px-5 py-3 max-6xl:py-5 max-6xl:px-7 focus:outline-none focus:ring-2 focus:ring-bg(--ui-dark) transition-all duration-300"
        ></textarea>
      </div>
      {/* Google reCAPTCHA Widget */}
      <div className="col-span-2">
        <div
          className="g-recaptcha"
          data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        ></div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-(--ui-dark) text-white py-4 rounded-[25px] hover:bg-(--ui-light)/10 hover:text-black hover:border transition-all duration-300 cursor-pointer ${buttonClass}`}
      >
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}
