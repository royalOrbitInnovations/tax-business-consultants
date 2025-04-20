// app/sitemap.js

import supabase from "@/app/lib/supabaseClient";

/**
 * Next.js will invoke this at build time or on-demand (ISR),
 * and expose /sitemap.xml automatically.
 */
export default async function sitemap() {
  // 1. Your static pages
  const staticRoutes = [
    {
      url: "https://taxbusinessconsultants.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://taxbusinessconsultants.com/about-us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://taxbusinessconsultants.com/services",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://taxbusinessconsultants.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://taxbusinessconsultants.com/contact-us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // 2. Fetch all posts from Supabase
  const { data: posts, error } = await supabase
    .from("posts")
    .select("id, updated_at");

  if (error) {
    console.error("Error fetching posts for sitemap:", error);
    // Fallback to only static routes if Supabase is down
    return staticRoutes;
  }

  // 3. Map each post to a sitemap entry
  const dynamicRoutes = posts.map((post) => ({
    url: `https://taxbusinessconsultants.com/blog/${post.id}`,
    lastModified: new Date(post.updated_at),
    changeFrequency: "daily",
    priority: 0.7,
  }));

  // 4. Combine and return
  return [...staticRoutes, ...dynamicRoutes];
}
