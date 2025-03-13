// "use client";
//
// import { useEffect, useState } from "react";
// import Link from "next/link";
//
// export default function DashboardHome() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [status, setStatus] = useState("");
//
//   // Fetch all posts from the API endpoint
//   const fetchPosts = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch("/api/blogs");
//       const data = await res.json();
//       console.log("Fetched posts:", data);
//       setPosts(data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//       setStatus("Error fetching posts");
//       setLoading(false);
//     }
//   };
//
//   useEffect(() => {
//     fetchPosts();
//   }, []);
//
//   // Handler for deleting a post
//   const handleDelete = async (id) => {
//     try {
//       const res = await fetch(`/api/blogs/${id}`, {
//         method: "DELETE",
//       });
//       if (res.ok) {
//         setStatus("Post deleted successfully");
//         fetchPosts();
//       } else {
//         setStatus("Error deleting post");
//       }
//     } catch (error) {
//       console.error("Error deleting post:", error);
//       setStatus("Error deleting post");
//     }
//   };
//
//   if (loading) {
//     return (
//       <div className="flex items-center justify-center py-20">
//         <p className="text-xl">Loading posts...</p>
//       </div>
//     );
//   }
//
//   return (
//     <div className="max-w-5xl mx-auto p-8 mt-[20rem]">
//       <div className="flex justify-between items-center mb-10">
//         <h1 className="text-4xl font-bold text-center">Admin Dashboard</h1>
//         {/* Create Post Button */}
//         <Link
//           href="/admin/dashboard/create"
//           className="px-6 py-3 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition"
//         >
//           Create Post
//         </Link>
//       </div>
//
//       {status && (
//         <p className="text-center text-lg text-green-600 mb-6">{status}</p>
//       )}
//
//       {posts.length === 0 ? (
//         <p className="text-center text-xl">No posts available.</p>
//       ) : (
//         <ul className="space-y-4">
//           {posts.map((post) => (
//             <li
//               key={post.id}
//               className="bg-white/80 shadow rounded-xl p-6 flex justify-between items-center"
//             >
//               <div className="space-y-2">
//                 <h2 className="text-2xl font-semibold">{post.heading}</h2>
//                 <p className="text-gray-600">
//                   {post.content.substring(0, 100)}...
//                 </p>
//               </div>
//               <div className="flex space-x-4">
//                 {/* Edit button: navigate to the edit page */}
//                 <Link
//                   href={`/admin/dashboard/edit?id=${post.id}`}
//                   className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
//                 >
//                   Edit
//                 </Link>
//                 {/* Delete button */}
//                 <button
//                   onClick={() => handleDelete(post.id)}
//                   className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
