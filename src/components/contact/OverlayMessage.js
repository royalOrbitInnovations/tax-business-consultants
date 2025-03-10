"use client";

export default function OverlayMessage({ submissionStatus }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={`p-6 rounded-lg text-white text-3xl ${
          submissionStatus.type === "success" ? "bg-green-600" : "bg-red-600"
        }`}
      >
        {submissionStatus.message}
      </div>
    </div>
  );
}
