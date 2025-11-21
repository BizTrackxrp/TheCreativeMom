import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { format } from "date-fns";

export default function Home() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const shortStories = posts.filter(p => p.category === 'Short Stories').slice(0, 2);
  const photoEssays = posts.filter(p => p.category === 'Photo Essays').slice(0, 2);
  const movieReviews = posts.filter(p => p.category === 'Movie Reviews').slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Featured Post with Teal Box */}
      {featuredPost && (
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-0 article-card">
            {/* Left Column - Text */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
              <div className="section-header-small mb-6">
                {featuredPost.category}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-black mb-4 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <span className="issue-tag">{format(new Date(featuredPost.date), 'MMMM d, yyyy')}</span>
              </div>
              <Link 
                href={`/blog/${featuredPost.slug}`}
                className="inline-block bg-black text-white px-8 py-3 font-bold uppercase tracking-wide hover:bg-teal-600 transition-colors"
              >
                Read Article →
              </Link>
            </div>
            
            {/* Right Column - Image (Teal placeholder) */}
            <div className="bg-teal-400 min-h-[400px] md:min-h-[500px] flex items-center justify-center">
              {featuredPost.coverImage ? (
                <div className="w-full h-full bg-gradient-to-br from-teal-300 to-teal-500"></div>
              ) : (
                <div className="text-center p-8">
                  <span className="text-6xl">📸</span>
                  <p className="text-white font-bold mt-4">Featured Image</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Short Stories Section */}
      {shortStories.length > 0 && (
        <section className="mb-12">
          <div className="section-header mb-6">
            Short Stories
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {shortStories.map((post) => (
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
                  <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {post.excerpt}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Photo Essays Section */}
      {photoEssays.length > 0 && (
        <section className="mb-12">
          <div className="section-header mb-6">
            Photo Essays
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {photoEssays.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="article-card group overflow-hidden"
              >
                <div className="bg-teal-400 h-64 flex items-center justify-center">
                  <span className="text-4xl">📷</span>
                </div>
                <article className="p-6">
                  <div className="mb-4">
                    <span className="text-xs issue-tag text-gray-600">
                      {format(new Date(post.date), 'MMM d, yyyy')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {post.excerpt}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Movie Reviews and Blog Posts Section */}
      <section className="mb-12">
        <div className="section-header mb-6">
          Movie Reviews and Blog Posts
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {movieReviews.map((post) => (
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

      {/* Call to Action */}
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
