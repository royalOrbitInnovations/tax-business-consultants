import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Blog - Tax Business Consultants",
  description: "Startup Consultants & Company Formation in Qatar",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
