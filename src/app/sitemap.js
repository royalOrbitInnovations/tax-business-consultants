// app/sitemap.js
import supabase from "@/app/lib/supabaseClient";

// ─────────────────────────────────────────────────────────────────────────────
// Force this route to be Server‑Side Rendered on every request
export const dynamic = "force-dynamic";
// // Or, to cache then revalidate hourly, use:
// // export const revalidate = 3600;
// ─────────────────────────────────────────────────────────────────────────────

export default async function sitemap() {
  // 1. Static routes
  const staticRoutes = [
    {
      url: "https://taxbusinessconsultants.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
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
      priority: 0.8,
    },
    {
      url: "https://taxbusinessconsultants.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://taxbusinessconsultants.com/contact-us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // 2. Fetch all posts (using created_at instead of updated_at)
  const { data: posts, error } = await supabase
    .from("posts")
    .select("id, created_at");

  if (error || !posts) {
    console.error("Error fetching posts for sitemap:", error);
    return staticRoutes;
  }

  // 3. Build dynamic routes array
  const dynamicRoutes = posts.map((post) => ({
    url: `https://taxbusinessconsultants.com/blog/${post.id}`,
    lastModified: new Date(post.created_at),
    changeFrequency: "daily",
    priority: 0.8,
  }));

  // 4. Return merged sitemap entries
  return [...staticRoutes, ...dynamicRoutes];
}
