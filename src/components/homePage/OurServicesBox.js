const data = [
  {
    image: "/svg/percentage.svg",
    head: "100% Ownership Business in Qatar",
    para: "Qatar offers favourable conditions for foreign entreprenuers eeking to set up business with complete ownership rights.",
  },
  {
    image: "/svg/formation.svg",
    head: "Company Formation in qatar",
    para: "The process of company formation in Qatar. When it somes to registering a company in Qatar, Tax Business Consultant is your go-to partner",
  },
  {
    image: "/svg/PRO-services.svg",
    head: "PRO Services in Qatar",
    para: "Tax Business Consultant is a leading provider of PRO services in Qatar. Our team of experienced professionals is dedicated to helping entrepreneurs",
  },
  {
    image: "/svg/consult.svg",
    head: "Business Consultancy Services",
    para: "TBC provides company formation, Sponsorship service, PRO services, office facilities and other typing and hukoomi works.",
  },
  {
    image: "/svg/lending-money.svg",
    head: "Local Sponsorship",
    para: " Local sponsorship in Qatar refers to the practice of having a Qatari national act as a sponsor for a foreign individual or company doing business in the country. ",
  },
  {
    image: "/svg/document.svg",
    head: "Document Attestaion",
    para: "Welcome to TBC Document Attestation Services in Qatar! We provide reliable and hassle-free certificate attestation services for individuals and businesses in Doha and across Qatar.",
  },
];

export default function OurServicesBox() {
  return (
    <div className="grid grid-cols-4 max-10xl:grid-cols-3 gap-[2rem] max-14xl:gap-[1.5rem] mt-[6rem]">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-(--ui-dark) p-[4rem] max-14xl:p-[2.5rem] rounded-[25px] flex flex-col gap-[1.5rem] text-white justify-center hover:bg-black transition-all duration-300 shadow-2xl"
        >
          <img
            src={item.image}
            alt={item.head}
            className="h-[8rem] w-[8rem] max-14xl:h-[6rem] max-14xl:w-[6rem]"
          />
          <h3 className="text-5xl">{item.head}</h3>
          <p className="text-2xl">{item.para}</p>
        </div>
      ))}
      <div className="relative col-span-2 max-10xl:col-span-3 bg-black rounded-[25px] rounded-tr-[150px] max-10xl:rounded-r-[150px] flex flex-col p-[4rem] max-10xl:px-[8rem] max-10xl:py-[6rem] max-14xl:p-[2.5rem] text-white hover:bg-(--ui-dark) transition-all duration-300 shadow-2xl">
        <h3 className="text-7xl">Choose the</h3>
        <h className="text-[5rem]">BEST SERVICE</h>
        <p className="text-5xl">Because you deserve to be the</p>
        <h className="text-[10rem]">Best</h>
        <button className="flex absolute bottom-[8rem] max-10xl:bottom-[50%] max-10xl:translate-y-[50%] right-[8rem] text-[2rem] items-center gap-[1rem] bg-white text-black px-[1rem] py-[1rem] rounded-[10px]">
          Get a Quote
          <img
            src="/svg/arrow-right-tax-business-consultants.svg"
            alt="Right Arrow"
            className="bg-white rounded-[50%] w-[2rem] h-[2rem]"
          />
        </button>
      </div>
      <div></div>
    </div>
  );
}
