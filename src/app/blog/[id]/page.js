import supabase from "@/app/lib/supabaseClient";
import ReactMarkdown from "react-markdown";
import ButtonUI from "@/components/ButtonUI";
import { notFound } from "next/navigation";

// Dynamic metadata generation
export async function generateMetadata({ params }) {
  const { id } = params;

  const { data: post, error } = await supabase
    .from("posts")
    .select(
      "meta_title, meta_description, meta_keywords, og_image, heading, image"
    )
    .eq("id", id)
    .single();

  if (!post || error) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta_title || post.heading,
    description: post.meta_description,
    keywords: post.meta_keywords
      ? post.meta_keywords.split(",").map((kw) => kw.trim())
      : [],
    openGraph: {
      title: post.meta_title || post.heading,
      description: post.meta_description,
      images: [post.og_image || post.image],
      url: `https://yoursite.com/blog/${id}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta_title || post.heading,
      description: post.meta_description,
      images: [post.og_image || post.image],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { id } = params;

  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (!post || error) {
    console.error("Error fetching post:", error);
    notFound(); // Properly handle 404 errors
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
            className="object-cover hover:scale-110 transition-all duration-800 h-full w-full"
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
