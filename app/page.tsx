import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-0 article-card">
          <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
            <div className="section-header-small mb-6">
              Featured
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-4 leading-tight">
              Welcome to The Creative Mom
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              A magazine-style blog featuring short stories, photo essays, movie reviews, and creative reflections.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <span className="issue-tag">November 2024</span>
            </div>
          </div>
          
          <div className="bg-teal-400 min-h-[400px] md:min-h-[500px] flex items-center justify-center">
            <div className="text-center p-8">
              <span className="text-8xl">📰</span>
              <p className="text-white font-bold mt-4 text-2xl">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-12">
        <div className="section-header mb-6">
          Explore Our Sections
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="article-card p-6 text-center">
            <span className="text-5xl block mb-4">📚</span>
            <h3 className="text-xl font-serif font-bold mb-2">Short Stories</h3>
            <p className="text-gray-600 text-sm">Original fiction and narratives</p>
          </div>
          
          <div className="article-card p-6 text-center">
            <span className="text-5xl block mb-4">📷</span>
            <h3 className="text-xl font-serif font-bold mb-2">Photo Essays</h3>
            <p className="text-gray-600 text-sm">Visual storytelling</p>
          </div>
          
          <div className="article-card p-6 text-center">
            <span className="text-5xl block mb-4">🎬</span>
            <h3 className="text-xl font-serif font-bold mb-2">Movie Reviews</h3>
            <p className="text-gray-600 text-sm">Film analysis and critique</p>
          </div>
          
          <div className="article-card p-6 text-center">
            <span className="text-5xl block mb-4">✍️</span>
            <h3 className="text-xl font-serif font-bold mb-2">Blog Posts</h3>
            <p className="text-gray-600 text-sm">Creative reflections</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white p-12 text-center">
        <h2 className="text-4xl font-serif font-black mb-4">
          Subscribe for Updates
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          New stories and essays coming soon
        </p>
        <button className="bg-teal-400 text-black px-10 py-4 font-bold uppercase tracking-wide hover:bg-teal-300 transition-colors">
          Coming Soon
        </button>
      </section>
    </div>
  );
}
