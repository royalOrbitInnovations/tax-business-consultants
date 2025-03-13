// "use client";
//
// import { useState, useEffect } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
//
// export default function EditPostPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const postId = searchParams.get("id");
//
//   const [loading, setLoading] = useState(true);
//   const [status, setStatus] = useState("");
//   const [heading, setHeading] = useState("");
//   const [content, setContent] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//
//   // Fetch the post data if an id is provided
//   useEffect(() => {
//     if (!postId) {
//       setStatus("No post ID provided.");
//       setLoading(false);
//       return;
//     }
//     const fetchPost = async () => {
//       try {
//         const res = await fetch(`/api/blogs/${postId}`);
//         if (!res.ok) {
//           setStatus("Post not found.");
//           setLoading(false);
//           return;
//         }
//         const data = await res.json();
//         setHeading(data.heading);
//         setContent(data.content);
//         setImageUrl(data.image || "");
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching post:", error);
//         setStatus("Error fetching post.");
//         setLoading(false);
//       }
//     };
//     fetchPost();
//   }, [postId]);
//
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Updating post...");
//     try {
//       const res = await fetch(`/api/blogs/${postId}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ heading, content, image: imageUrl }),
//       });
//       if (res.ok) {
//         setStatus("Post updated successfully!");
//         // Optionally redirect back to dashboard
//         router.push("/admin/dashboard");
//       } else {
//         setStatus("Error updating post.");
//       }
//     } catch (error) {
//       console.error("Error updating post:", error);
//       setStatus("Error updating post.");
//     }
//   };
//
//   if (loading) {
//     return (
//       <div className="flex items-center justify-center py-20">
//         <p className="text-xl">Loading post...</p>
//       </div>
//     );
//   }
//
//   return (
//     <div className="max-w-7xl mx-auto p-8 space-y-8 pt-[20rem]">
//       <h1 className="text-5xl font-bold text-center">Edit Post</h1>
//       {status && <p className="text-center text-lg">{status}</p>}
//       <form
//         onSubmit={handleSubmit}
//         className="space-y-6 border p-6 rounded-xl bg-gray-50 shadow-md"
//       >
//         <div>
//           <label
//             className="block font-semibold mb-2 text-4xl"
//             htmlFor="heading"
//           >
//             Heading
//           </label>
//           <input
//             id="heading"
//             type="text"
//             value={heading}
//             onChange={(e) => setHeading(e.target.value)}
//             className="w-full text-3xl p-3 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-2" htmlFor="content">
//             Content (Markdown supported)
//           </label>
//           <textarea
//             id="content"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="w-full text-3xl h-[50rem] p-3 border rounded"
//             rows={10}
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-2" htmlFor="imageUrl">
//             Image URL
//           </label>
//           <input
//             id="imageUrl"
//             type="text"
//             value={imageUrl}
//             onChange={(e) => setImageUrl(e.target.value)}
//             className="w-full p-3 border rounded"
//           />
//           {imageUrl && (
//             <div className="mt-4">
//               <img
//                 src={imageUrl}
//                 alt="Current post image"
//                 className="w-full h-auto rounded shadow"
//               />
//             </div>
//           )}
//         </div>
//         <button
//           type="submit"
//           className="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
//         >
//           Update Post
//         </button>
//       </form>
//     </div>
//   );
// }
