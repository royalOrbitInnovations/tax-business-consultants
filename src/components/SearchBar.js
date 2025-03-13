"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import animationData from "../animations/search.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function SearchBar({ type }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const containerRef = useRef(null);

  const handleSearch = async () => {
    if (!query.trim()) {
      setResults([]);
      setHasSearched(false);
      return;
    }
    try {
      const res = await fetch(`/api/blogs?q=${query.toLowerCase()}`);
      if (res.ok) {
        const data = await res.json();
        setResults(data);
      } else {
        console.error("Error fetching posts");
      }
      setHasSearched(true);
    } catch (error) {
      console.error("Fetch error:", error);
      setHasSearched(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Hide results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="px-[20rem] flex flex-col items-center justify-center max-10xl:px-[15rem]"
      style={type === "user" ? { marginTop: "10rem" } : undefined}
    >
      <div
        ref={containerRef}
        className="relative w-full flex flex-col items-center"
      >
        <div className="w-full flex items-center justify-between max-9xl:flex-col">
          {type === "user" && (
            <h2 className="text-8xl font-bold text-(--ui-dark) max-6xl:text-6xl mb-4">
              Blog Posts
            </h2>
          )}
          <div className="flex justify-end items-center gap-[1rem]">
            <input
              placeholder="Search for posts"
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                // Reset search state when input changes
                setHasSearched(false);
              }}
              onKeyDown={handleKeyDown}
              className="border border-2 border-(--ui-light) w-[20vw] h-[5rem] p-[2rem] rounded-full text-2xl focus:outline focus:outline-offset-2 focus:outline-(--ui-dark) transition-all duration-300 max-15xl:w-[40rem]"
            />
            <div
              onClick={handleSearch}
              className="w-[10rem] h-[10rem] flex justify-center items-center hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <Lottie animationData={animationData} loop={true} />
            </div>
          </div>
        </div>

        {/* Search results container */}
        {results.length > 0 && (
          <ul className="absolute top-full left-0 mt-2 w-[18vw] max-15xl:w-[35rem] bg-white shadow-lg rounded-md overflow-hidden z-10">
            {results.map((post) => (
              <li
                key={post.id}
                className="p-4 border-b border-(--ui-light) hover:bg-(--ui-light) transition-colors duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-(--ui-dark)">
                  {post.heading}
                </h3>
              </li>
            ))}
          </ul>
        )}

        {/* Display "No posts found" only if a search has been performed */}
        {hasSearched && results.length === 0 && (
          <div className="absolute top-full left-0 mt-2 w-[18vw] max-15xl:w-[35rem] bg-white shadow-lg rounded-md p-4 z-10">
            <p className="text-xl text-(--ui-dark)">No posts found</p>
          </div>
        )}
      </div>
    </div>
  );
}
