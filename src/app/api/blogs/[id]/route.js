import supabase from "@/app/lib/supabaseClient";
import { NextResponse } from "next/server";

// GET /api/blogs/[id] - Get a single post
export async function GET(request, { params }) {
  const { id } = params;
  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !post) {
    return new Response("Post not found", { status: 404 });
  }
  return new Response(JSON.stringify(post), { status: 200 });
}

// Utility function to create a slug from a string
function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

// PUT /api/blogs/[id] - Update a post
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const updatedPost = await request.json();

    // If the heading is updated, generate a new slug and check for uniqueness.
    if (updatedPost.heading && updatedPost.heading !== id) {
      let newSlug = slugify(updatedPost.heading);

      // If the new slug is different from the current id, check for an existing post.
      if (newSlug !== id) {
        const { data: existingPosts } = await supabase
          .from("posts")
          .select("id")
          .eq("id", newSlug);
        if (existingPosts && existingPosts.length > 0) {
          newSlug = `${newSlug}-${Date.now()}`;
        }
        updatedPost.id = newSlug;
      }
    }

    // Update the post with the matching id.
    const { data, error } = await supabase
      .from("posts")
      .update(updatedPost)
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error updating post:", error);
      return NextResponse.json(
        { error: "Error updating post" },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json({ error: "Error updating post" }, { status: 500 });
  }
}

// DELETE /api/blogs/[id] - Delete a post
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const { data, error } = await supabase.from("posts").delete().eq("id", id);

    if (error || !data || data.length === 0) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json({ error: "Error deleting post" }, { status: 500 });
  }
}
