import supabase from "@/app/lib/supabaseClient";
import ReactMarkdown from "react-markdown";
import ButtonUI from "@/components/ButtonUI";

export const metadata = {
  title: "Blog Post",
  description:
    "Read our blog post for insights on business consulting in Qatar.",
};

export default async function BlogPostPage({ params }) {
  // Await the dynamic params before destructuring
  const { id } = await params;

  // Query Supabase directly
  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  // If not found or there's an error, show 404
  if (!post || error) {
    console.error("Error fetching post:", error);
  }

  return (
    <article className="w-full max-w-7xl mx-auto my-[15rem] p-[5rem] bg-white/80 shadow-2xl rounded-2xl flex flex-col items-center space-y-8">
      <h1 className="text-7xl font-extrabold text-center text-gray-800">
        {post.heading}
      </h1>

      {post.image && (
        <div className="relative w-full h-[40rem] rounded-3xl overflow-hidden shadow-xl">
          <img
            src={post.image}
            alt={post.heading}
            fill
            className="object-cover hover:scale-110 transition-all duration-800"
          />
        </div>
      )}

      <div
        className="prose max-w-none
                    prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-5xl
                    prose-h3:text-4xl prose-p:text-3xl prose-p:leading-relaxed"
      >
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      <ButtonUI to="/blog" size="2rem">
        Go Back
      </ButtonUI>
    </article>
  );
}
