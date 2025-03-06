export const metadata = {
  title: "Blog - Tax Business Consultants",
  description: "Startup Consultants & Company Formation in Qatar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
