"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogPostsDisplay() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (!posts.length) return <p>No posts found.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/blog/${post.id}`}
              className="text-2xl text-blue-600 hover:underline"
            >
              {post.heading}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
