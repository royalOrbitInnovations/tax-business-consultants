import supabase from "@/app/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  // Start building the query to fetch posts
  let queryBuilder = supabase.from("posts").select("*");

  // If a search query is provided, filter posts with a case-insensitive match on heading
  if (query) {
    queryBuilder = queryBuilder.ilike("heading", `%${query}%`);
  }

  const { data: posts, error } = await queryBuilder;

  if (error) {
    return NextResponse.json(
      { error: "Error fetching posts" },
      { status: 500 }
    );
  }

  return NextResponse.json(posts);
}

// Helper function to create a slug from the heading
function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

export async function POST(request) {
  try {
    const newPost = await request.json();

    // Generate a slug from the post heading
    let slug = slugify(newPost.heading);

    // Check if a post with the same slug exists in Supabase
    const { data: existingPosts } = await supabase
      .from("posts")
      .select("id")
      .eq("id", slug);

    // If slug already exists, append a timestamp for uniqueness
    if (existingPosts && existingPosts.length > 0) {
      slug = `${slug}-${Date.now()}`;
    }
    newPost.id = slug;

    // Insert the new post into Supabase
    const { data, error } = await supabase.from("posts").insert([newPost]);

    if (error) throw error;

    return NextResponse.json(data[0], { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: "Error creating post" }, { status: 500 });
  }
}
