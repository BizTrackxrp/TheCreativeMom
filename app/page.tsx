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
      {/* Featured Story */}
      {newestPost && (
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-0 border-2 border-black">
            {/* Left - Text */}
            <div className="p-8 md:p-10 bg-white border-r-2 border-black">
              <div className="bg-black text-white px-4 py-2 inline-block mb-4 text-xs font-bold uppercase tracking-widest">
                Lead Story • {newestPost.category}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-black mb-4 leading-tight">
                {newestPost.title}
              </h2>
              <p className="text-gray-700 text-base mb-4 leading-relaxed">
                {newestPost.excerpt}
              </p>
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-6">
                {format(new Date(newestPost.date), 'MMMM d, yyyy')}
              </div>
              <Link 
                href={`/blog/${newestPost.slug}`}
                className="inline-block bg-black text-white px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors"
              >
                Read Now →
              </Link>
            </div>
            
            {/* Right - Image Placeholder */}
            <div className="bg-gray-200 min-h-[400px] md:min-h-[500px] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="border-2 border-gray-400 w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-xs uppercase font-bold">Image</span>
                </div>
                <p className="text-gray-500 text-sm uppercase tracking-wide">Featured Image</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Second Post - Full Width */}
      {secondPost && (
        <section className="mb-12 border-t-4 border-black pt-8">
          <div className="bg-black text-white px-4 py-2 inline-block mb-6 text-sm font-bold uppercase tracking-widest">
            Recent Posts
          </div>
          <Link href={`/blog/${secondPost.slug}`} className="border-2 border-black block group hover:shadow-lg transition-all">
            <div className="grid md:grid-cols-4 gap-0">
              {/* Image */}
              <div className="bg-gray-200 h-64 md:h-auto flex items-center justify-center border-r-2 border-black">
                <div className="border-2 border-gray-400 w-24 h-24 flex items-center justify-center">
                  <span className="text-gray-500 text-xs uppercase font-bold">Image</span>
                </div>
              </div>
              {/* Content */}
              <div className="md:col-span-3 p-8 bg-white">
                <div className="mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1">
                    {secondPost.category}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-gray-500 ml-3">
                    {format(new Date(secondPost.date), 'MMM d, yyyy')}
                  </span>
                </div>
                <h3 className="text-3xl font-serif font-black mb-3 group-hover:underline">
                  {secondPost.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {secondPost.excerpt}
                </p>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* More Stories Grid */}
      {olderPosts.length > 0 && (
        <section className="mb-12 border-t-4 border-black pt-8">
          <div className="bg-black text-white px-4 py-2 inline-block mb-6 text-sm font-bold uppercase tracking-widest">
            More Stories
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {olderPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="border-2 border-black group hover:shadow-lg transition-all"
              >
                <article>
                  {/* Image placeholder - small */}
                  <div className="bg-gray-200 h-48 flex items-center justify-center border-b-2 border-black">
                    <div className="border-2 border-gray-400 w-16 h-16 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">IMG</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6 bg-white">
                    <div className="mb-3">
                      <span className="text-xs uppercase tracking-wider text-gray-500">
                        {format(new Date(post.date), 'MMM d, yyyy')}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-2 group-hover:underline">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="border-4 border-black bg-white p-12 text-center">
        <h2 className="text-4xl font-serif font-black mb-4">
          Read All Stories
        </h2>
        <p className="text-gray-600 text-lg mb-8 uppercase tracking-wide">
          Explore our complete archive
        </p>
        <Link 
          href="/blog"
          className="inline-block bg-black text-white px-10 py-4 font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors"
        >
          View Archive
        </Link>
      </section>
    </div>
  );
}
