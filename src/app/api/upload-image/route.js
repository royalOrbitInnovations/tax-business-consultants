// // app/api/upload/route.js
// import { NextResponse } from "next/server";
// import { createClient } from "@supabase/supabase-js";
//
// // Initialize Supabase client with service role key for server-side operations
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;
// const supabase = createClient(supabaseUrl, supabaseServiceKey);
//
// export async function POST(request) {
//   try {
//     const formData = await request.formData();
//     const file = formData.get("file");
//
//     if (!file) {
//       return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
//     }
//
//     // Generate a unique filename
//     const filename = `${Date.now()}-${file.name}`;
//
//     // Convert file Blob to Buffer
//     const arrayBuffer = await file.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);
//
//     // Upload file to a Supabase bucket (replace 'blog-images' with your bucket name)
//     const { data, error } = await supabase.storage
//       .from("blog-images")
//       .upload(filename, buffer, {
//         cacheControl: "3600",
//         upsert: false,
//       });
//
//     if (error) {
//       console.error("Supabase upload error:", error);
//       return NextResponse.json({ error: error.message }, { status: 500 });
//     }
//
//     // Retrieve the public URL for the uploaded file
//     const { publicURL, error: publicUrlError } = supabase.storage
//       .from("blog-images")
//       .getPublicUrl(filename);
//
//     if (publicUrlError) {
//       console.error("Error getting public URL:", publicUrlError);
//       return NextResponse.json(
//         { error: publicUrlError.message },
//         { status: 500 }
//       );
//     }
//
//     return NextResponse.json({ url: publicURL });
//   } catch (error) {
//     console.error("Error uploading file:", error);
//     return NextResponse.json(
//       { error: "Error uploading file" },
//       { status: 500 }
//     );
//   }
// }
