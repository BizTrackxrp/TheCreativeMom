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
      {newestPost && (
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-0 article-card">
            <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
              <div className="section-header-small mb-6">
                Latest • {newestPost.category}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-black mb-4 leading-tight">
                {newestPost.title}
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {newestPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <span className="issue-tag">{format(new Date(newestPost.date), 'MMMM d, yyyy')}</span>
              </div>
              <Link 
                href={`/blog/${newestPost.slug}`}
                className="inline-block bg-black text-white px-8 py-3 font-bold uppercase tracking-wide hover:bg-teal-600 transition-colors self-start"
              >
                Read Now →
              </Link>
            </div>
            
            <div className="bg-teal-400 min-h-[400px] md:min-h-[500px] flex items-center justify-center">
              <div className="text-center p-8">
                <span className="text-8xl">✍️</span>
                <p className="text-white font-bold mt-4 text-2xl">Featured Story</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {secondPost && (
        <section className="mb-12">
          <div className="section-header mb-6">
            Recent Posts
          </div>
          <Link href={`/blog/${secondPost.slug}`} className="article-card block group hover:shadow-xl transition-all">
            <div className="grid md:grid-cols-3 gap-0">
              <div className="bg-teal-400 h-64 md:h-auto flex items-center justify-center">
                <span className="text-6xl">✍️</span>
              </div>
              <div className="md:col-span-2 p-8 bg-white">
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    {secondPost.category} • {format(new Date(secondPost.date), 'MMM d, yyyy')}
                  </span>
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4 group-hover:text-teal-600 transition-colors">
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

      {olderPosts.length > 0 && (
        <section className="mb-12">
          <div className="section-header mb-6">
            More Stories
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {olderPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="article-card group"
              >
                <article className="p-6">
                  <div className="mb-4">
                    <span className="text-xs issue-tag text-gray-600">
                      {format(new Date(post.date), 'MMM d, yyyy')}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="bg-black text-white p-12 text-center">
        <h2 className="text-4xl font-serif font-black mb-4">
          Read All Stories
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Explore our complete archive of creative content
        </p>
        <Link 
          href="/blog"
          className="inline-block bg-teal-400 text-black px-10 py-4 font-bold uppercase tracking-wide hover:bg-teal-300 transition-colors"
        >
          View Archive
        </Link>
      </section>
    </div>
  );
}
