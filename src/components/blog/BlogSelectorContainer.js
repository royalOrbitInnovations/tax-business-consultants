"use client";

import { useEffect, useState } from "react";
import BlogPostSelector from "./BlogPostSelector";

export default function BlogSelectorContainer() {
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
    <div className="relative mx-[20rem] py-[6rem] mb-[5rem] grid grid-cols-3 gap-[5rem] max-15xl:grid-cols-2 max-15xl:justify-center max-15xl:justify-items-center max-15xl:gap-[2rem] max-10xl:mx-[10rem] max-6xl:mx-[5rem] max-6xl:grid-cols-1">
      {posts.map((post) => (
        <BlogPostSelector key={post.id} blog={post} />
      ))}

      <div className="absolute flex gap-[2rem] bottom-0 right-0">
        <button className="border border-(--ui-dark) rounded-[10px] px-[2rem] py-[1rem] text-3xl hover:bg-(--ui-dark) hover:scale-110 hover:text-white transition-all duration-300 cursor-pointer">
          Previous
        </button>
        <button className="border border-(--ui-dark) rounded-[10px] px-[2rem] py-[1rem] text-3xl hover:bg-(--ui-dark) hover:scale-110 hover:text-white transition-all duration-300 cursor-pointer">
          Next
        </button>
      </div>
    </div>
  );
}
