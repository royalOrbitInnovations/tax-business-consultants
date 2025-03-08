export default function FooterContact() {
  return (
    <div className="mt-[4rem] max-14xl:col-span-2 max-14xl:mx-auto">
      <h3 className="text-5xl">Don&apos;t Miss Subscribed</h3>
      <div className="relative">
        <input
          placeholder="Enter your Email"
          className="border border-white w-[100%] my-[2rem] h-[4rem] rounded-full p-[1rem]"
        />
        <img
          src="/svg/send.svg"
          alt="send"
          className="w-[4rem] absolute top-[50%] translate-y-[-50%] right-3 cursor-pointer"
        />
      </div>
      <div className="flex justify-around gap-[2rem] text-lg">
        <div className="flex gap-[1rem]">
          <img
            src="/svg/phone.svg"
            alt="phone"
            className="border-r pr-5 w-[3rem] h-[3rem]"
          />
          <p>
            <span>To Enquire More</span> <br />
            <span>+974 66761700</span>
          </p>
        </div>
        <div className="flex gap-[1rem]">
          <img
            src="/svg/email.svg"
            alt="email"
            className="border-r pr-5 w-[4rem] h-[3rem]"
          />
          <p>
            <span>To Send Mail</span> <br /> <span>imfo@tbcqa.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
