"use client";

import { useState, useMemo } from "react"; // ✅ useMemo added
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import TurndownService from "turndown"; // ✅ NEW

// Dynamically import CKEditorApp on the client only
const CKEditorApp = dynamic(() => import("@/components/Admin/CKEditorApp"), {
  ssr: false,
});

export default function CreatePostPage() {
  const router = useRouter();
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState(""); // CKEditor HTML
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Meta tag states
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [ogImage, setOgImage] = useState("");

  /* ------------------------------------------------------------------ */
  /* Turndown (HTML ➜ Markdown)                                         */
  /* ------------------------------------------------------------------ */
  const turndown = useMemo(
    () =>
      new TurndownService({
        headingStyle: "atx",
        bulletListMarker: "-",
      }),
    []
  );
  /* ------------------------------------------------------------------ */

  // Handler for form submission to create a post
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Creating post...");
    setSubmitting(true);
    try {
      /* -------------------------------------------------------------- */
      /* Convert CKEditor HTML to Markdown before sending               */
      /* -------------------------------------------------------------- */
      const markdownContent = turndown.turndown(content);
      /* -------------------------------------------------------------- */

      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heading,
          content: markdownContent, // store as Markdown
          image: imageUrl,
          meta_title: metaTitle,
          meta_description: metaDescription,
          meta_keywords: metaKeywords,
          author_name: authorName,
          og_image: ogImage,
        }),
      });
      if (res.ok) {
        setStatus("Post created successfully!");
        setTimeout(() => router.back(), 1500);
      } else {
        setStatus("Error creating post.");
        setSubmitting(false);
      }
    } catch (error) {
      console.error("Error creating post:", error);
      setStatus("Error creating post.");
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-[70vw] mx-auto space-y-8 pt-[15rem] mb-[10rem]">
      <h1 className="text-5xl font-bold text-center">Create Post</h1>
      {status && <p className="text-center text-lg">{status}</p>}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 border border-(--ui-dark) p-[2rem] rounded-xl shadow-2xl"
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

        {/* CKEditor Content */}
        <div className="prose">
          <label
            htmlFor="content"
            className="block font-semibold mb-[1rem] text-4xl"
          >
            Content
          </label>
          <div className="pl-[3rem]">
            <CKEditorApp
              initialData={content}
              onChange={(data) => setContent(data)} // receives HTML
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
                alt="Image preview"
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

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 bg-(--ui-dark) text-white font-bold rounded-full hover:bg-black transition-all duration-300 text-3xl"
        >
          {submitting ? "Creating…" : "Create Post"}
        </button>
      </form>
    </div>
  );
}
