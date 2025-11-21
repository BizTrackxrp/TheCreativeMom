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
      <div className="mb-8">
        <div className="section-header mb-6">
          {category ? category : 'All Posts Archive'}
        </div>
        <p className="text-lg text-gray-700">
          {category 
            ? `Browse all ${category.toLowerCase()}`
            : 'Complete collection of stories, essays, and reviews'}
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-12 pb-8 border-b-2 border-black">
        <Link
          href="/blog"
          className={`px-6 py-3 font-bold uppercase tracking-wide transition-all border-2 border-black ${
            !category
              ? 'bg-black text-white'
              : 'bg-white text-black hover:bg-gray-100'
          }`}
        >
          All Posts
        </Link>
        {['Short Stories', 'Photo Essays', 'Movie Reviews', 'Blog Post'].map((cat) => (
          <Link
            key={cat}
            href={`/blog?category=${cat}`}
            className={`px-6 py-3 font-bold uppercase tracking-wide transition-all border-2 border-black ${
              category === cat
                ? 'bg-black text-white'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="article-card group"
            >
              <article className="h-full flex flex-col">
                <div className="p-4 border-b border-gray-300 bg-gray-50">
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                
                {post.category === 'Photo Essays' && (
                  <div className="bg-teal-400 h-48 flex items-center justify-center border-b border-gray-300">
                    <span className="text-3xl">📷</span>
                  </div>
                )}
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3">
                    <span className="text-xs issue-tag text-gray-600">
                      {format(new Date(post.date), 'MMMM d, yyyy')}
                    </span>
                  </div>
                  <h2 className="text-2xl font-serif font-bold mb-3 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="text-sm font-bold uppercase tracking-wide group-hover:text-teal-600 transition-colors">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border-2 border-black">
          <p className="text-2xl font-serif text-gray-600">
            No posts found in this category yet.
          </p>
          <Link 
            href="/blog"
            className="inline-block mt-6 bg-black text-white px-8 py-3 font-bold uppercase tracking-wide hover:bg-teal-600 transition-colors"
          >
            View All Posts
          </Link>
        </div>
      )}
    </div>
  );
}
