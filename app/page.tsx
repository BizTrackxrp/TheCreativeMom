import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { format } from "date-fns";

export default function Home() {
  const posts = getAllPosts();
  const newestPost = posts[0];
  const secondPost = posts[1];
  const olderPosts = posts.slice(2, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Lead Story - Full Width */}
      {newestPost && (
        <section className="mb-12 pb-12 border-b-4 border-black">
          <div className="max-w-4xl">
            <div className="bg-black text-white px-4 py-2 inline-block mb-4 text-xs font-bold uppercase tracking-widest">
              Lead Story • {newestPost.category}
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-black mb-6 leading-tight">
              {newestPost.title}
            </h2>
            <p className="text-xl text-gray-700 mb-4 leading-relaxed">
              {newestPost.excerpt}
            </p>
            <div className="text-xs uppercase tracking-wider text-gray-500 mb-6">
              {format(new Date(newestPost.date), 'MMMM d, yyyy')}
            </div>
            <Link 
              href={`/blog/${newestPost.slug}`}
              className="inline-block bg-black text-white px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors"
            >
              Read Full Story →
            </Link>
          </div>
        </section>
      )}

      {/* Second Story */}
      {secondPost && (
        <section className="mb-12 pb-12 border-b-4 border-black">
          <div className="bg-black text-white px-4 py-2 inline-block mb-6 text-sm font-bold uppercase tracking-widest">
            Recent Posts
          </div>
          <Link href={`/blog/${secondPost.slug}`} className="block group">
            <div className="max-w-4xl">
              <div className="mb-3">
                <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 border border-black">
                  {secondPost.category}
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-500 ml-3">
                  {format(new Date(secondPost.date), 'MMM d, yyyy')}
                </span>
              </div>
              <h3 className="text-4xl font-serif font-black mb-4 group-hover:underline leading-tight">
                {secondPost.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {secondPost.excerpt}
              </p>
            </div>
          </Link>
        </section>
      )}

      {/* More Stories - Three Column Grid */}
      {olderPosts.length > 0 && (
        <section className="mb-12">
          <div className="bg-black text-white px-4 py-2 inline-block mb-6 text-sm font-bold uppercase tracking-widest">
            More Stories
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {olderPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group border-t-2 border-black pt-4"
              >
                <article>
                  <div className="mb-3">
                    <span className="text-xs uppercase tracking-wider text-gray-500">
                      {format(new Date(post.date), 'MMM d, yyyy')}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3 group-hover:underline leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {post.excerpt.substring(0, 120)}...
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Archive CTA */}
      <section className="border-4 border-black bg-white p-12 text-center mt-12">
        <h2 className="text-4xl font-serif font-black mb-4 uppercase">
          Complete Archive
        </h2>
        <p className="text-gray-600 mb-8 uppercase tracking-wide text-sm">
          Read All Published Stories
        </p>
        <Link 
          href="/blog"
          className="inline-block bg-black text-white px-10 py-4 font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors text-sm"
        >
          View All Posts →
        </Link>
      </section>
    </div>
  );
}
