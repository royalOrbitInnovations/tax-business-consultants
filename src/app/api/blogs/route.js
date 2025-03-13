import db from "@/app/lib/db";
import { NextResponse } from "next/server";

// GET /api/blogs - List posts (with optional search query)
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase();

  await db.read();
  let posts = db.data.posts || [];

  if (query) {
    posts = posts.filter((post) => post.heading.toLowerCase().includes(query));
  }

  return NextResponse.json(posts);
}

// POST /api/blogs - Create a new post
export async function POST(request) {
  try {
    const newPost = await request.json();
    // Assign a unique id (using timestamp; consider UUID in production)
    newPost.id = Date.now().toString();

    // Read the current database contents
    await db.read();
    db.data ||= { posts: [] };

    // Add the new post
    db.data.posts.push(newPost);

    // Write back to the JSON file
    await db.write();

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: "Error creating post" }, { status: 500 });
  }
}
