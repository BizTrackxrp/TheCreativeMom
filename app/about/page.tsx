export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="border-b-4 border-black pb-4 mb-8">
        <h1 className="text-4xl font-serif font-black uppercase">About The Creative Mom</h1>
      </div>

      {/* Hero Image */}
      <div className="mb-12 flex justify-center">
        <img 
          src="/images/creative-mom-hero.png" 
          alt="The Creative Mom - A creative mother with her two children"
          className="w-full max-w-lg"
        />
      </div>

      {/* About Content */}
      <div className="max-w-3xl mx-auto">
        <article className="border-2 border-black p-8 mb-8">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Welcome to The Creative Mom
          </h2>
          
          <div className="space-y-6 text-gray-800 leading-relaxed">
            <p className="text-lg">
              I'm a creative mom passionate about exploring the intersection of art, 
              storytelling, and the human experience through various creative mediums.
            </p>

            <p>
              This blog is my space to share behind-the-scenes moments, movie reviews, 
              short stories, and creative reflections. Each piece is crafted with care, 
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

        {/* What You'll Find */}
        <div className="border-2 border-black p-8 mb-8">
          <h3 className="text-2xl font-serif font-bold mb-6">
            What You'll Find Here
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-b border-gray-300 pb-4">
              <span className="font-bold uppercase text-sm tracking-wide">Behind the Scenes</span>
              <p className="text-gray-700 mt-1">Personal reflections on creativity and motherhood</p>
            </div>
            <div className="border-b border-gray-300 pb-4">
              <span className="font-bold uppercase text-sm tracking-wide">Screening Now</span>
              <p className="text-gray-700 mt-1">Thoughtful film analysis and reviews</p>
            </div>
            <div className="border-b border-gray-300 pb-4">
              <span className="font-bold uppercase text-sm tracking-wide">Short Stories</span>
              <p className="text-gray-700 mt-1">Original fiction and creative narratives</p>
            </div>
            <div className="border-b border-gray-300 pb-4">
              <span className="font-bold uppercase text-sm tracking-wide">Photo Essays</span>
              <p className="text-gray-700 mt-1">Visual storytelling and photography</p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="bg-black text-white p-10 text-center mb-8">
          <h2 className="text-3xl font-serif font-black italic mb-4">
            "Creativity is not a luxury—it's a necessity."
          </h2>
          <p className="text-gray-300 text-sm uppercase tracking-widest">
            — The Creative Mom
          </p>
        </div>

        {/* Coming Soon - Write for Us */}
        <div className="border-4 border-black p-12 text-center bg-gray-50">
          <h2 className="text-3xl font-serif font-black mb-4 uppercase">
            Coming Soon
          </h2>
          <h3 className="text-xl font-serif font-bold mb-6">
            Want to Write on The Creative Mom Blog?
          </h3>
          <div className="max-w-2xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              We're building a platform where creative writers can share their stories, 
              connect with readers, and grow their audience.
            </p>
            <p className="font-semibold">
              Coming features:
            </p>
            <ul className="text-left inline-block space-y-2">
              <li>• Create your writer account and profile</li>
              <li>• Publish your posts directly to the blog</li>
              <li>• Receive tips from readers who love your work</li>
              <li>• Build your portfolio with all your posts in one place</li>
              <li>• Searchable by writer name or post title</li>
            </ul>
            <p className="mt-6 text-sm uppercase tracking-wide font-bold">
              Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
