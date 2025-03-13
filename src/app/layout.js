import Header from "@/components/header/Header";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import ContactButtons from "@/components/ContactButtons";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Tax Business Consultants",
  description: "Startup Consultants & Company Formation in Qatar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <ContactButtons />
        <Footer />
      </body>
    </html>
  );
}
