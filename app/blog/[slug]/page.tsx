import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";
import PostContent from "./PostContent";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <Link 
        href="/"
        className="inline-block mb-6 text-sm uppercase tracking-wide hover:underline"
      >
        ← Back to Home
      </Link>

      {/* Article Header */}
      <article className="border-b-4 border-black pb-8 mb-8">
        <div className="flex justify-between items-start gap-6">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-serif font-black mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="text-sm uppercase tracking-wider text-gray-600 mb-6">
              By Patrice • {format(new Date(post.date), 'MM/dd/yyyy')}
            </div>

            <p className="text-xl text-gray-700 leading-relaxed italic border-l-4 border-black pl-6">
              {post.excerpt}
            </p>
          </div>

          {/* Like Button - Top Right */}
          <PostContent content={post.content} slug={slug} isLikeButton={true} />
        </div>
      </article>

      {/* Featured Image (if exists) */}
      {post.coverImage && (
        <div className="mb-12">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full max-w-2xl mx-auto"
          />
        </div>
      )}

      {/* Article Content */}
      <PostContent content={post.content} slug={slug} isLikeButton={false} />

      {/* Back to Home */}
      <div className="mt-8 text-center">
        <Link 
          href="/"
          className="inline-block bg-black text-white px-8 py-3 font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors text-sm"
        >
          ← Back to All Stories
        </Link>
      </div>
    </div>
  );
}
