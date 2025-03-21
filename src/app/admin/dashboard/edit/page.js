"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Dynamically import CKEditorApp on the client only
const CKEditorApp = dynamic(() => import("@/components/Admin/CKEditorApp"), {
  ssr: false,
});

export default function EditPostPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const postId = searchParams.get("id");

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // New states for meta tag fields
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [ogImage, setOgImage] = useState("");

  useEffect(() => {
    if (!postId) {
      setStatus("No post ID provided.");
      setLoading(false);
      return;
    }
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/blogs/${postId}`);
        if (!res.ok) {
          setStatus("Post not found.");
          setLoading(false);
          return;
        }
        const data = await res.json();
        setHeading(data.heading);
        setContent(data.content);
        setImageUrl(data.image || "");
        // Set meta tag values if available
        setMetaTitle(data.meta_title || "");
        setMetaDescription(data.meta_description || "");
        setMetaKeywords(data.meta_keywords || "");
        setAuthorName(data.author_name || "");
        setOgImage(data.og_image || "");
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setStatus("Error fetching post.");
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Updating post...");
    setSubmitting(true);
    try {
      const res = await fetch(`/api/blogs/${postId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heading,
          content,
          image: imageUrl,
          meta_title: metaTitle,
          meta_description: metaDescription,
          meta_keywords: metaKeywords,
          author_name: authorName,
          og_image: ogImage,
        }),
      });
      if (res.ok) {
        setStatus("Post updated successfully!");
        setTimeout(() => router.back(), 1500);
      } else {
        setStatus("Error updating post.");
        setSubmitting(false);
      }
    } catch (error) {
      console.error("Error updating post:", error);
      setStatus("Error updating post.");
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-xl">Loading post...</p>
      </div>
    );
  }

  return (
    <div className="max-w-[70vw] mx-auto space-y-8 pt-[15rem] mb-[10rem]">
      <h1 className="text-5xl font-bold text-center">Edit Post</h1>
      {status && <p className="text-center text-lg">{status}</p>}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 border border-(--ui-dark) p-[2rem] rounded-xl shadow-2xl bg-gray-50"
      >
        {/* Blog Heading */}
        <div className="flex flex-col items-center">
          <label
            htmlFor="heading"
            className="block font-semibold mb-[1rem] text-4xl self-start"
          >
            Heading
          </label>
          <input
            id="heading"
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="text-3xl p-3 border rounded w-[60vw] border-gray-300"
            placeholder="Enter Blog Title"
            required
          />
        </div>

        {/* CKEditor for Content */}
        <div className="prose">
          <label
            htmlFor="content"
            className="block font-semibold mb-[1rem] text-4xl"
          >
            Edit your Content
          </label>
          <div className="pl-[3rem]">
            <CKEditorApp
              initialData={content}
              onChange={(data) => setContent(data)}
              placeholder="Type or paste your content here!"
            />
          </div>
        </div>

        {/* Image URL */}
        <div className="flex flex-col items-center">
          <label
            htmlFor="imageUrl"
            className="block font-semibold mb-[1rem] text-4xl self-start"
          >
            Image URL
          </label>
          <input
            id="imageUrl"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-[60vw] p-3 border rounded text-2xl border-gray-300"
            placeholder="Enter image URL. The correct URL will render image below"
          />
          {imageUrl && (
            <div className="mt-4">
              <img
                src={imageUrl}
                alt="Current post image"
                className="w-[60rem] h-auto rounded shadow text-2xl"
              />
            </div>
          )}
        </div>

        {/* SEO Meta Tags */}
        <div className="border-t pt-6">
          <h2 className="text-4xl font-bold text-center mb-4">SEO Meta Tags</h2>

          {/* Meta Title */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="metaTitle"
              className="block font-semibold mb-[1rem] text-3xl self-start"
            >
              Meta Title
            </label>
            <input
              id="metaTitle"
              type="text"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              className="text-2xl p-3 border rounded w-[60vw] border-gray-300"
              placeholder="Enter Meta Title"
            />
          </div>

          {/* Meta Description */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="metaDescription"
              className="block font-semibold mb-[1rem] text-3xl self-start"
            >
              Meta Description
            </label>
            <textarea
              id="metaDescription"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              className="text-2xl p-3 border rounded w-[60vw] border-gray-300"
              placeholder="Enter Meta Description"
              rows="3"
            ></textarea>
          </div>

          {/* Meta Keywords */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="metaKeywords"
              className="block font-semibold mb-[1rem] text-3xl self-start"
            >
              Meta Keywords
            </label>
            <input
              id="metaKeywords"
              type="text"
              value={metaKeywords}
              onChange={(e) => setMetaKeywords(e.target.value)}
              className="text-2xl p-3 border rounded w-[60vw] border-gray-300"
              placeholder="Enter Meta Keywords (comma separated)"
            />
          </div>

          {/* Author Name */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="authorName"
              className="block font-semibold mb-[1rem] text-3xl self-start"
            >
              Author Name
            </label>
            <input
              id="authorName"
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="text-2xl p-3 border rounded w-[60vw] border-gray-300"
              placeholder="Enter Author Name"
            />
          </div>

          {/* OG Image */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="ogImage"
              className="block font-semibold mb-[1rem] text-3xl self-start"
            >
              OG Image URL
            </label>
            <input
              id="ogImage"
              type="text"
              value={ogImage}
              onChange={(e) => setOgImage(e.target.value)}
              className="text-2xl p-3 border rounded w-[60vw] border-gray-300"
              placeholder="Enter OG Image URL"
            />
            {ogImage && (
              <div className="mt-4">
                <img
                  src={ogImage}
                  alt="Current OG Image"
                  className="w-[60rem] h-auto rounded shadow text-2xl"
                />
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 bg-(--ui-dark) text-white font-bold rounded-full hover:bg-black transition-all duration-300 text-3xl"
        >
          {submitting ? "Updating…" : "Update Post"}
        </button>
      </form>
    </div>
  );
}
