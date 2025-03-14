import supabase from "./src/app/lib/supabaseClient.js";
import fs from "fs";
import { join } from "path";

async function migrateData() {
  const file = join(process.cwd(), "data", "db.json");
  const rawData = fs.readFileSync(file, "utf8");
  const { posts } = JSON.parse(rawData);

  for (const post of posts) {
    const { data, error } = await supabase.from("posts").insert([post]);
    if (error) {
      console.error("Error inserting post:", post, error);
    } else {
      console.log("Inserted post:", post.id);
    }
  }
}

migrateData();
