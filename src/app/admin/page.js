"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Logging in...");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        setStatus("Login successful!");
        router.push("/admin/dashboard");
      } else {
        const data = await res.json();
        setStatus(data.error || "Login failed");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred.");
    }
  };

  return (
    <div className="flex items-center justify-center h-[100vh] w-[100vw] bg-gray-50 rounded-xl">
      <form
        onSubmit={handleSubmit}
        className="h-[30vh] w-[30vw] p-6 border rounded-2xl shadow-lg bg-white flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl mb-[5rem] text-center font-bold">
          Admin Login
        </h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter admin email"
          className="border p-2 mb-[2rem] rounded-2xl h-[3rem] w-[60%] text-3xl"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter admin password"
          className="border p-2 mb-[3rem] rounded-2xl h-[3rem] w-[60%] text-3xl"
          required
        />
        <button
          type="submit"
          className="w-[60%] bg-(--ui-dark) text-white py-2 px-4 rounded-2xl hover:bg-black transition-colors duration-200 text-3xl cursor-pointer"
        >
          Login
        </button>
        {status && (
          <p className="mt-4 text-3xl text-center text-red-500">{status}</p>
        )}
      </form>
    </div>
  );
}
