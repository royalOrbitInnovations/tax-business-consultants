"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import SearchBar from "@/components/SearchBar";

export default function DashboardHome() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

  // Loading states for individual buttons
  const [createLoading, setCreateLoading] = useState(false);
  const [editLoading, setEditLoading] = useState({});
  const [deleteLoading, setDeleteLoading] = useState({});

  // Fetch all posts and sort them by created_at (newest first)
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/blogs");
      const data = await res.json();

      // Sort posts by created_at in descending order (newest first)
      const sortedPosts = data.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );

      setPosts(sortedPosts);
      setLoading(false);
    } catch (error) {
      setStatus("Error fetching posts");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Clear status after 3 seconds when updated
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  // Handler for deleting a post
  const handleDelete = async (id) => {
    // Set the delete loading state for the specific post
    setDeleteLoading((prev) => ({ ...prev, [id]: true }));
    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setStatus("Post deleted successfully");
        fetchPosts(); // Re-fetch posts after deletion
      } else {
        setStatus("Error deleting post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      setStatus("Error deleting post");
    } finally {
      setDeleteLoading((prev) => ({ ...prev, [id]: false }));
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-xl">Loading posts...</p>
      </div>
    );
  }

  return (
    <div
      className="px-[20rem] mx-auto p-8 mt-[15rem]"
      style={{ fontFamily: "var(--font-secondary)" }}
    >
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-center">Admin Dashboard</h1>
        <SearchBar />
        {/* Create Post Button with loading state */}
        <Link
          href="/admin/dashboard/create"
          onClick={() => setCreateLoading(true)}
          className={`text-3xl px-6 py-3 bg-(--ui-dark) text-white font-bold hover:scale-110 transition-all duration-300 rounded-full ${
            createLoading ? "pointer-events-none opacity-50" : ""
          }`}
        >
          {createLoading ? "Loading..." : "Create Post"}
        </Link>
      </div>

      {status && (
        <p className="absolute text-center text-3xl rounded-full px-[1rem] py-[1rem] text-white bg-green-500 mb-6 w-[15rem] left-[50%] translate-x-[-50%]">
          {status}
        </p>
      )}

      {posts.length === 0 ? (
        <p className="text-center text-xl">No posts available.</p>
      ) : (
        <ul className="space-y-4 grid grid-cols-4 gap-[2rem]">
          {posts.map((post) => (
            <li
              key={post.id}
              className="bg-white/80 shadow-xl border rounded-xl p-6 flex justify-between items-center h-[45rem]"
            >
              <div className="space-y-5 flex flex-col justify-between">
                <img
                  src={post.image}
                  className="h-[20rem]"
                  alt={post.heading}
                />
                <h2 className="text-2xl font-semibold">{post.heading}</h2>
                <div className="h-[10rem] text-2xl overflow-hidden">
                  <ReactMarkdown>
                    {`${post.content.substring(0, 200)}...`}
                  </ReactMarkdown>
                </div>

                <div className="flex space-x-4">
                  {/* Edit Button with loading state */}
                  <Link
                    href={`/admin/dashboard/edit?id=${post.id}`}
                    onClick={() =>
                      setEditLoading((prev) => ({ ...prev, [post.id]: true }))
                    }
                    className={`bg-yellow-500 text-white rounded transition-all duration-300 text-3xl px-[2rem] py-[1rem] hover:scale-105 ${
                      editLoading[post.id]
                        ? "pointer-events-none opacity-50"
                        : "hover:bg-yellow-600"
                    }`}
                  >
                    {editLoading[post.id] ? "Loading..." : "Edit"}
                  </Link>
                  {/* Delete Button with loading state */}
                  <button
                    onClick={() => handleDelete(post.id)}
                    disabled={deleteLoading[post.id]}
                    className={`bg-red-600 text-white rounded transition-all duration-300 text-3xl px-[2rem] py-[1rem] hover:scale-105 ${
                      deleteLoading[post.id]
                        ? "pointer-events-none opacity-50"
                        : "hover:bg-red-700"
                    }`}
                  >
                    {deleteLoading[post.id] ? "Loading..." : "Delete"}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
