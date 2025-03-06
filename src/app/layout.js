import Header from "@/components/header/Header";
import "./globals.css";

export const metadata = {
  title: "Tax Business Consultants",
  description: "Startup Consultants & Company Formation in Qatar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
