// // app/blog/[id]/page.js
// import { notFound } from "next/navigation";
// import { join } from "path";
// import { Low } from "lowdb";
// import { JSONFile } from "lowdb/node";
// import ReactMarkdown from "react-markdown";
// import Image from "next/image";
// import ButtonUI from "@/components/ButtonUI";
//
// // Helper function to get a single post by id
// async function getPostById(id) {
//   const file = join(process.cwd(), "data", "db.json");
//   const adapter = new JSONFile(file);
//   const db = new Low(adapter, { posts: [] });
//   await db.read();
//   db.data ||= { posts: [] };
//   return db.data.posts.find((post) => post.id.toString() === id);
// }
//
// // Pre-generate paths based on available posts
// export async function generateStaticParams() {
//   const file = join(process.cwd(), "data", "db.json");
//   const adapter = new JSONFile(file);
//   const db = new Low(adapter, { posts: [] });
//   await db.read();
//   db.data ||= { posts: [] };
//
//   return db.data.posts.map((post) => ({
//     id: post.id.toString(),
//   }));
// }
//
// export const metadata = {
//   title: "Blog Post",
//   description:
//     "Read our blog post for insights on business consulting in Qatar.",
// };
//
// export default async function BlogPostPage({ params }) {
//   const resolvedParams = await Promise.resolve(params);
//   const { id } = resolvedParams;
//
//   const post = await getPostById(id);
//
//   if (!post) {
//     notFound();
//   }
//
//   return (
//     <article className="w-full max-w-7xl mx-auto my-[15rem] p-10 bg-white/80 shadow-2xl rounded-2xl flex flex-col items-center space-y-8">
//       <h1 className="text-7xl font-extrabold text-center text-gray-800">
//         {post.heading}
//       </h1>
//       {post.image && (
//         <div className="relative w-full h-[40rem] rounded-3xl overflow-hidden shadow-xl">
//           <Image
//             src={post.image}
//             alt={post.heading}
//             fill
//             className="object-cover hover:scale-110 transition-all duration-800"
//           />
//         </div>
//       )}
//       <div
//         className="prose max-w-none
//                       prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-5xl
//                       prose-h3:text-4xl prose-p:text-3xl prose-p:leading-relaxed"
//       >
//         <ReactMarkdown>{post.content}</ReactMarkdown>
//       </div>
//       <ButtonUI to="/blog">Go Back</ButtonUI>
//     </article>
//   );
// }
