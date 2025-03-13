"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePostPage() {
  const router = useRouter();
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("");

  // Handler for form submission to create a post
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Creating post...");
    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ heading, content, image: imageUrl }),
      });
      if (res.ok) {
        setStatus("Post created successfully!");
        setTimeout(() => router.push("/admin/dashboard"), 1500);
      } else {
        setStatus("Error creating post.");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      setStatus("Error creating post.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8 pt-[20rem]">
      <h1 className="text-5xl font-bold text-center">Create Post</h1>
      {status && <p className="text-center text-lg">{status}</p>}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 border p-6 rounded-xl bg-gray-50 shadow-md"
      >
        <div>
          <label
            htmlFor="heading"
            className="block font-semibold mb-2 text-4xl"
          >
            Heading
          </label>
          <input
            id="heading"
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="w-full text-3xl p-3 border rounded"
            required
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block font-semibold mb-2 text-4xl"
          >
            Content (Markdown supported)
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full text-3xl min-h-[40rem] p-3 border rounded"
            rows={10}
            required
          />
        </div>
        <div>
          <label
            htmlFor="imageUrl"
            className="block font-semibold mb-2 text-4xl"
          >
            Image URL
          </label>
          <input
            id="imageUrl"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full p-3 border rounded text-2xl"
            placeholder="Enter image URL"
          />
          {imageUrl && (
            <div className="mt-4">
              <img
                src={imageUrl}
                alt="Image Links seems to be broken. Please paste correct image link"
                className="w-full h-auto rounded shadow text-2xl"
              />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
