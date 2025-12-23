import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { format } from "date-fns";

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category } = await searchParams;
  const allPosts = getAllPosts();
  
  const filteredPosts = category
    ? allPosts.filter((post) => post.category === category)
    : allPosts;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8 border-b-4 border-black pb-4">
        <h1 className="text-4xl font-serif font-black mb-2">
          {category ? category : 'ALL POSTS ARCHIVE'}
        </h1>
        <p className="text-sm text-gray-600">
          {category 
            ? `Browse all ${category.toLowerCase()}`
            : 'Complete collection of stories, essays, and reviews'}
        </p>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="border-2 border-black hover:shadow-lg transition-all group"
            >
              <article className="h-full flex flex-col p-6 bg-white">
                <div className="mb-3">
                  <span className="text-xs uppercase tracking-wider text-gray-600">
                    {format(new Date(post.date), 'MMMM d, yyyy')}
                  </span>
                </div>
                <h2 className="text-2xl font-serif font-bold mb-3 group-hover:underline">
                  {post.title}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border-2 border-black">
          <p className="text-2xl font-serif font-bold text-gray-600">
            No posts found in this category yet.
          </p>
          <Link 
            href="/blog"
            className="inline-block mt-6 bg-black text-white px-8 py-3 font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors"
          >
            View All Posts
          </Link>
        </div>
      )}
    </div>
  );
}
