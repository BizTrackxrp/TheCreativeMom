export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="section-header mb-12">
        About The Creative Mom
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Large About Content */}
        <div className="md:col-span-2">
          <article className="article-card p-8">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Welcome to The Creative Mom Magazine
            </h2>
            
            <div className="space-y-6 text-gray-800 leading-relaxed">
              <p className="text-lg">
                I'm a creative mom passionate about exploring the intersection of art, 
                storytelling, and the human experience through various creative mediums.
              </p>

              <p>
                This magazine-style blog is my space to share short stories, photo essays, 
                movie reviews, and creative reflections. Each piece is crafted with care, 
                exploring themes of creativity, parenthood, art, and life's beautiful complexities.
              </p>

              <p>
                I believe that creative work deserves thoughtful, nuanced discussion—whether 
                it's a film that moved me, a story that needed telling, or a visual essay 
                that captures a moment in time. This publication is my attempt to honor 
                that belief.
              </p>

              <p>
                Thank you for reading. I hope these pages inspire you to see the world 
                through a more creative lens.
              </p>
            </div>
          </article>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* What You'll Find */}
          <div className="article-card p-6 bg-teal-400">
            <h3 className="text-xl font-bold mb-4">What You'll Find Here</h3>
            <ul className="space-y-3 text-sm">
              <li className="pb-3 border-b border-black">
                <span className="font-bold">Short Stories</span>
                <p className="text-gray-900 mt-1">Original fiction and creative narratives</p>
              </li>
              <li className="pb-3 border-b border-black">
                <span className="font-bold">Photo Essays</span>
                <p className="text-gray-900 mt-1">Visual storytelling and photography</p>
              </li>
              <li className="pb-3 border-b border-black">
                <span className="font-bold">Movie Reviews</span>
                <p className="text-gray-900 mt-1">Thoughtful film analysis and critique</p>
              </li>
              <li>
                <span className="font-bold">Blog Posts</span>
                <p className="text-gray-900 mt-1">Reflections on creativity and life</p>
              </li>
            </ul>
          </div>

          {/* Quick Facts */}
          <div className="article-card p-6">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-black pb-2">
              Quick Facts
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-bold uppercase text-xs text-gray-600">Format</span>
                <p className="text-gray-900">Digital Magazine</p>
              </div>
              <div>
                <span className="font-bold uppercase text-xs text-gray-600">Focus</span>
                <p className="text-gray-900">Creative Content</p>
              </div>
              <div>
                <span className="font-bold uppercase text-xs text-gray-600">Updated</span>
                <p className="text-gray-900">Weekly</p>
              </div>
              <div>
                <span className="font-bold uppercase text-xs text-gray-600">Founded</span>
                <p className="text-gray-900">2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-black text-white p-12 text-center">
        <h2 className="text-4xl font-serif font-black italic mb-6">
          "Creativity is not a luxury—it's a necessity."
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          This magazine celebrates the creative spirit in all its forms. Whether through 
          words, images, or film analysis, we explore what it means to create, observe, 
          and share stories that matter.
        </p>
      </div>

      {/* Contact/Connect Section */}
      <div className="mt-12 article-card p-8 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">
          Let's Connect
        </h2>
        <p className="text-gray-700 mb-6">
          I'd love to hear from you! Whether you have thoughts on a piece, 
          recommendations, or just want to chat about creativity.
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="mailto:hello@thecreativemom.com" 
            className="bg-black text-white px-8 py-3 font-bold uppercase tracking-wide hover:bg-teal-600 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

