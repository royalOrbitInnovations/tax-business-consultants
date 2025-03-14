// src/app/lib/db.js
import { join } from "path";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const file = join(process.cwd(), "data", "db.json");
const adapter = new JSONFile(file);
// Pass default data as the second argument
const db = new Low(adapter, { posts: [] });

await db.read();
db.data ||= { posts: [] };

export default db;
