// "use client";
//
// import { useState } from "react";
// import { useRouter } from "next/navigation";
//
// export default function CreatePostPage() {
//   const router = useRouter();
//   const [heading, setHeading] = useState("");
//   const [content, setContent] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [status, setStatus] = useState("");
//
//   // Handler for file input change
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(file);
//   };
//
//   // Handler to upload file to Supabase and set image URL
//   const handleFileUpload = async () => {
//     if (!selectedFile) {
//       setStatus("Please select a file first.");
//       return;
//     }
//     setStatus("Uploading file...");
//     const formData = new FormData();
//     formData.append("file", selectedFile);
//     try {
//       const res = await fetch("/api/upload", {
//         method: "POST",
//         body: formData,
//       });
//       const data = await res.json();
//       if (data.url) {
//         setImageUrl(data.url);
//         setStatus("File uploaded successfully!");
//       } else {
//         setStatus("Error uploading file.");
//       }
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       setStatus("Error uploading file.");
//     }
//   };
//
//   // Handler for form submission to create a post
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Creating post...");
//     try {
//       const res = await fetch("/api/blogs", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ heading, content, image: imageUrl }),
//       });
//       if (res.ok) {
//         setStatus("Post created successfully!");
//         setTimeout(() => router.push("/admin/dashboard"), 1500);
//       } else {
//         setStatus("Error creating post.");
//       }
//     } catch (error) {
//       console.error("Error creating post:", error);
//       setStatus("Error creating post.");
//     }
//   };
//
//   return (
//     <div className="max-w-3xl mx-auto p-8 space-y-8 pt-20">
//       <h1 className="text-4xl font-bold text-center">Create Post</h1>
//       {status && <p className="text-center text-lg">{status}</p>}
//       <form
//         onSubmit={handleSubmit}
//         className="space-y-6 border p-6 rounded-xl bg-gray-50 shadow-md"
//       >
//         <div>
//           <label htmlFor="heading" className="block font-semibold mb-2">
//             Heading
//           </label>
//           <input
//             id="heading"
//             type="text"
//             value={heading}
//             onChange={(e) => setHeading(e.target.value)}
//             className="w-full p-3 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="content" className="block font-semibold mb-2">
//             Content (Markdown supported)
//           </label>
//           <textarea
//             id="content"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="w-full p-3 border rounded"
//             rows={10}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="imageFile" className="block font-semibold mb-2">
//             Upload Image
//           </label>
//           <input
//             id="imageFile"
//             type="file"
//             onChange={handleFileChange}
//             className="mb-2"
//           />
//           <button
//             type="button"
//             onClick={handleFileUpload}
//             className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
//           >
//             Upload File
//           </button>
//           {imageUrl && (
//             <div className="mt-4">
//               <img
//                 src={imageUrl}
//                 alt="Uploaded"
//                 className="w-full h-auto rounded shadow"
//               />
//             </div>
//           )}
//         </div>
//         <button
//           type="submit"
//           className="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
//         >
//           Create Post
//         </button>
//       </form>
//     </div>
//   );
// }
