import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="relative h-[100vh] w-[100vw]">
        <Image
          src="/images/conatcts-bg.png"
          fill
          className="object-cover"
          alt="Contact BG"
        />
      </div>

      {/* Overlay Container */}
      <div className=" top-[50%] translate-y-[-50%] absolute left-0 w-full flex gap-[5rem] items-center">
        <h2 className=" ml-[20rem] max-14xl:ml-[10rem] text-[7rem]">
          If you need any consult, How can we help you?
        </h2>

        {/* Form */}
        <form
          className="bg-white rounded-2xl shadow-lg w-[70%] mr-[20rem] max-14xl:mr-[10rem] grid grid-cols-2 auto-rows-auto gap-[4rem] text-3xl p-[4rem]"
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

          <div className="col-span-2">
            <label className="block text-(--ui-dark) font-medium mb-1">
              Write Message*
            </label>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full h-[25rem] border text-gray-600 text-xl border-gray-200 rounded-[25px] px-5 py-3 focus:outline-none focus:ring-2 focus:ring-bg(--ui-dark)  transition-all duration-300"
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
