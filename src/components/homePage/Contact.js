import Image from "next/image";

export default function Contact() {
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

      {/* Overlay Container */}
      <div className=" top-[50%] translate-y-[-50%] absolute left-0 w-full flex max-10xl:flex-col gap-[5rem] items-center max-10xl:pt-[13rem] max-5xl:pt-[3rem] max-10xl:overflow-hidden max-10xl:pb-[5rem]">
        <h2 className=" ml-[20rem] max-14xl:ml-[10rem] text-[7rem] max-10xl:text-[5rem] max-10xl:ml-0 max-6xl:px-[5rem]">
          If you need any consult, How can we help you?
        </h2>

        {/* Form */}
        <form
          className="bg-white rounded-2xl shadow-lg w-[70%] max-5xl:w-[90%] mr-[20rem] max-14xl:mr-[10rem] max-10xl:mx-[15rem] grid grid-cols-2 max-5xl:grid-cols-1 auto-rows-auto gap-[4rem] max-6xl:gap-[2rem] text-3xl p-[4rem]"
          style={{ fontFamily: "var(--font-secondary)" }}
        >
          <div className="">
            <label className="block text-(--ui-dark) font-medium mb-1">
              Name*
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border text-gray-600 text-xl border-gray-200 rounded-[25px] px-5 py-3 focus:outline-none focus:ring-2 focus:ring-bg(--ui-dark)  transition-all duration-300"
            />
          </div>

          <div className="">
            <label className="block text-(--ui-dark) font-medium mb-1">
              Work Email*
            </label>
            <input
              type="email"
              placeholder="Your Work Email"
              className="w-full border text-gray-600 text-xl border-gray-200 rounded-[25px] px-5 py-3 focus:outline-none focus:ring-2 focus:ring-bg(--ui-dark)  transition-all duration-300"
            />
          </div>

          <div className="">
            <label className="block text-(--ui-dark) font-medium mb-1">
              Company Name*
            </label>
            <input
              type="text"
              placeholder="Your Company Name"
              className="w-full border text-gray-600 text-xl border-gray-200 rounded-[25px] px-5 py-3 focus:outline-none focus:ring-2 focus:ring-bg(--ui-dark)  transition-all duration-300"
            />
          </div>

          <div className="">
            <label className="block text-(--ui-dark) font-medium mb-1">
              Phone No*
            </label>
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full border text-gray-600 text-xl border-gray-200 rounded-[25px] px-5 py-3 focus:outline-none focus:ring-2 focus:ring-bg(--ui-dark)  transition-all duration-300"
            />
          </div>

          <div className="col-span-2 max-5xl:col-span-1">
            <label className="block text-(--ui-dark) font-medium mb-1">
              Write Message*
            </label>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full h-[25rem] max-6xl:h-[20rem] border text-gray-600 text-xl border-gray-200 rounded-[25px] px-5 py-3 max-6xl:py-5 max-6xl:px-7 focus:outline-none focus:ring-2 focus:ring-bg(--ui-dark)  transition-all duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-(--ui-dark) text-white py-4 rounded-[25px] hover:bg-(--ui-light)/10 hover:text-black hover:border transition-all duration-300 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
