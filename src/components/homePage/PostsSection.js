"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/app/loading";

export default function PostsSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        // Fetch posts from your API
        const res = await fetch("/api/blogs");
        if (res.ok) {
          const data = await res.json();
          // Sort posts by date (assuming date is in a parsable string format)
          const sortedPosts = data.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
          // Only keep the latest 3 posts
          setPosts(sortedPosts.slice(0, 3));
        } else {
          console.error("Error fetching posts");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="flex mt-[5rem] gap-[5rem] max-14xl:gap-[3.5rem] max-10xl:gap-[2rem] justify-around max-10xl:justify-center max-7xl:grid max-7xl:grid-cols-2 max-5xl:grid-cols-1 max-6xl:grid-rows-auto max-5xl:gap-[4rem]">
      {posts.map((item) => (
        <div key={item.id} className="max-5xl:mx-auto">
          <div className="flex gap-[2rem] mb-[1rem]">
            <span className="flex gap-[1rem]">
              <img src="/svg/consulting-tag.svg" alt="Consulting-tag" />
              Consulting
            </span>
            <span className="flex gap-[1rem]">
              <img src="/svg/calender.svg" alt="Calendar" />
              {item.date}
            </span>
          </div>
          <div className="relative h-[25rem] w-[40rem] max-17xl:w-[35rem] max-15xl:w-[30rem] aspect-[16/9] rounded-lg overflow-hidden shadow-2xl max-5xl:w-[100%] max-4xl:w-[90%]">
            <img
              src={item.image}
              alt="post-image"
              className="object-cover hover:scale-110 transition-all duration-500"
            />
          </div>
          <h2 className="text-[2.5rem] w-[70%] max-14xl:w-[80%] mt-[2rem]">
            {item.heading}
          </h2>
          <Link
            href={`/blog/${item.id}`}
            className="flex gap-[1rem] text-2xl items-center font-bold mt-[2rem]"
          >
            Read More
            <img
              src="/svg/arrorw-top-right-tax-business-consultants.svg"
              alt="arrow"
              className="w-[2rem] h-[2rem]"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
