import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { format } from "date-fns";

export default function Home() {
  const posts = getAllPosts();
  const newestPost = posts[0];
  const secondPost = posts[1];
  const olderPosts = posts.slice(2, 4); // Only show 2 more posts (total of 4)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Lead Story */}
      {newestPost && (
        <section className="mb-8 md:mb-12 pb-8 md:pb-12 border-b-4 border-black">
          {/* Mobile Layout - Image First */}
          <div className="md:hidden">
            {/* Image */}
            <div className="bg-[#F5E6D3] flex items-center justify-center p-4 mb-6">
              <img 
                src="/images/creative-mom-hero.png" 
                alt="The Creative Mom"
                className="w-full max-w-sm"
              />
            </div>
            {/* Text */}
            <div>
              <h2 className="text-3xl font-serif font-black mb-3 leading-tight">
                {newestPost.title}
              </h2>
              <div className="text-xs uppercase tracking-wider text-gray-600 mb-4">
                By Patrice • {format(new Date(newestPost.date), 'MM/dd/yyyy')}
              </div>
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                {newestPost.excerpt}
              </p>
              <Link 
                href={`/blog/${newestPost.slug}`}
                className="inline-block bg-black text-white px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors"
              >
                Read Full Story →
              </Link>
            </div>
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden md:grid md:grid-cols-2 gap-0 items-stretch">
            {/* Text */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-serif font-black mb-4 leading-tight">
                {newestPost.title}
              </h2>
              <div className="text-xs uppercase tracking-wider text-gray-600 mb-6">
                By Patrice • {format(new Date(newestPost.date), 'MM/dd/yyyy')}
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {newestPost.excerpt}
              </p>
              <Link 
                href={`/blog/${newestPost.slug}`}
                className="inline-block bg-black text-white px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors self-start"
              >
                Read Full Story →
              </Link>
            </div>
            
            {/* Hero Image */}
            <div className="bg-[#F5E6D3] flex items-center justify-center p-4">
              <img 
                src="/images/creative-mom-hero.png" 
                alt="The Creative Mom"
                className="w-full h-full object-contain max-h-[500px]"
              />
            </div>
          </div>
        </section>
      )}

      {/* Second Story */}
      {secondPost && (
        <section className="mb-8 md:mb-12 pb-8 md:pb-12 border-b-4 border-black">
          <Link href={`/blog/${secondPost.slug}`} className="block group">
            <div className="max-w-4xl">
              <h3 className="text-2xl md:text-4xl font-serif font-black mb-3 group-hover:underline leading-tight">
                {secondPost.title}
              </h3>
              <div className="text-xs uppercase tracking-wider text-gray-600 mb-4">
                By Patrice • {format(new Date(secondPost.date), 'MM/dd/yyyy')}
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {secondPost.excerpt}
              </p>
            </div>
          </Link>
        </section>
      )}

      {/* More Stories - Last 2 Posts */}
      {olderPosts.length > 0 && (
        <section className="mb-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {olderPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group pb-6 border-b-2 border-black"
              >
                <article>
                  <h3 className="text-2xl md:text-xl font-serif font-bold mb-3 group-hover:underline leading-tight">
                    {post.title}
                  </h3>
                  <div className="text-xs uppercase tracking-wider text-gray-600 mb-3">
                    By Patrice • {format(new Date(post.date), 'MM/dd/yyyy')}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {post.excerpt.substring(0, 120)}...
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* View All Posts Link */}
      <div className="text-right mt-8 mb-4">
        <Link 
          href="/blog"
          className="text-sm uppercase tracking-wide underline hover:no-underline font-bold"
        >
          View All Posts →
        </Link>
      </div>
    </div>
  );
}
