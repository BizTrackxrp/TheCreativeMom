import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Article Header */}
      <div className="border-b-4 border-black bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Link 
            href="/blog" 
            className="inline-block mb-6 text-sm font-bold uppercase tracking-wide hover:text-teal-600 transition-colors"
          >
            ← Back to Archive
          </Link>
          
          <div className="mb-6">
            <Link
              href={`/blog?category=${post.category}`}
              className="section-header-small hover:bg-teal-600 transition-colors"
            >
              {post.category}
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-black mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed font-serif">
            {post.excerpt}
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            <time className="issue-tag text-gray-600">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
            <span className="text-gray-400">•</span>
            <span className="issue-tag text-gray-600">Issue 12</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.coverImage && (
        <div className="border-b-4 border-black">
          <div className="bg-teal-400 h-96 flex items-center justify-center">
            <span className="text-6xl">📸</span>
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="article-content prose-lg">
          <MDXRemote source={post.content} />
        </div>
      </article>

      {/* Article Footer */}
      <div className="border-t-4 border-black bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link
              href="/blog"
              className="bg-black text-white px-8 py-3 font-bold uppercase tracking-wide hover:bg-teal-600 transition-colors"
            >
              ← More Posts
            </Link>
            <Link
              href={`/blog?category=${post.category}`}
              className="bg-black text-white px-8 py-3 font-bold uppercase tracking-wide hover:bg-teal-600 transition-colors"
            >
              More in {post.category} →
            </Link>
          </div>
        </div>
      </div>

      {/* End of Article Marker */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <div className="inline-block border-t-2 border-b-2 border-black py-2 px-8">
            <span className="text-2xl font-serif">✦</span>
          </div>
        </div>
      </div>
    </div>
  );
}
