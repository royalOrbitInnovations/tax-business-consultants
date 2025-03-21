"use client";
import dynamic from "next/dynamic";
import animationData from "../animations/not-found.json";
import { useRouter } from "next/navigation";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div
      className="h-screen w-full bg-gradient-to-br from-black via-blue-900 to-white flex flex-col items-center justify-center text-white text-center p-4"
      style={{ fontFamily: "var(--font-secondary)" }}
    >
      <Lottie
        animationData={animationData}
        loop={true}
        style={{ height: "300px", width: "300px" }}
      />
      <h1 className="text-6xl font-bold mb-4 animate-bounce">Page Not Found</h1>
      <p className="text-6xl mb-8 w-[50%] mx-auto">
        You&apos;ve wandered onto the wrong page. Check the address again.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => router.back()}
          className="bg-blue-500 hover:bg-blue-600 text-white text-3xl font-bold py-2 px-4 rounded"
        >
          Go Back
        </button>
        <button
          onClick={() => router.push("/")}
          className="bg-green-500 hover:bg-green-600 text-white text-3xl font-bold py-2 px-4 rounded"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
