"use client";

import { useEffect, useState } from "react";
import BlogPostSelector from "./BlogPostSelector";

export default function BlogSelectorContainer() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 6;

  useEffect(() => {
    // Fetch posts and sort by created_at (newest first)
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        const sortedPosts = data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setPosts(sortedPosts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (!posts.length) return <p>No posts found.</p>;

  // Determine the posts to display for the current page
  const startIndex = currentPage * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if ((currentPage + 1) * postsPerPage < posts.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="relative mx-[20rem] py-[6rem] mb-[5rem]">
      <div className="grid grid-cols-3 gap-[5rem] max-15xl:grid-cols-2 max-15xl:justify-center max-15xl:justify-items-center max-15xl:gap-[2rem] max-10xl:mx-[10rem] max-6xl:mx-[5rem] max-6xl:grid-cols-1">
        {currentPosts.map((post) => (
          <BlogPostSelector key={post.id} blog={post} />
        ))}
      </div>

      <div className="absolute flex gap-[2rem] bottom-0 right-0">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="border border-(--ui-dark) rounded-[10px] px-[2rem] py-[1rem] text-3xl hover:bg-(--ui-dark) hover:scale-110 hover:text-white transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={(currentPage + 1) * postsPerPage >= posts.length}
          className="border border-(--ui-dark) rounded-[10px] px-[2rem] py-[1rem] text-3xl hover:bg-(--ui-dark) hover:scale-110 hover:text-white transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
