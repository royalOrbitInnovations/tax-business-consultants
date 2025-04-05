import Link from "next/link";

export default function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center text-[1.2rem] py-2 bg-black/90 text-white">
      <p>
        &copy; {currentYear} Tax Business Consultants. All rights reserved.{" "}
        Developed by{" "}
        <Link
          href="https://roi.qa"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-800"
        >
          ROI
        </Link>
        .
      </p>
    </div>
  );
}
