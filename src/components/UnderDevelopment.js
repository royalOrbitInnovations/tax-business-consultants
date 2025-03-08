"use client";

export default function UnderDevelopment() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 flex flex-col items-center justify-center text-white text-center p-4">
      <h1 className="text-6xl font-bold mb-4 animate-bounce">Stay Tuned</h1>
      <p className="text-2xl mb-8">This page is currently under development.</p>
      <div className="space-y-2 text-xl">
        <p className="animate-pulse">
          Developed by{" "}
          <a
            href="https://www.melvinprince.io"
            className="underline hover:text-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Melvin Prince
          </a>
        </p>
        <p>Powered by ROI, Doha Qatar</p>
      </div>
    </div>
  );
}
