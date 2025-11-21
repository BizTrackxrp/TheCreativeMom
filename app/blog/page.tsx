import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center">
      <div className="section-header inline-block mb-8">
        Coming Soon
      </div>
      <p className="text-2xl text-gray-700 mb-8">
        Blog posts will be available soon!
      </p>
      <Link 
        href="/"
        className="bg-black text-white px-8 py-3 font-bold uppercase tracking-wide hover:bg-teal-600 transition-colors inline-block"
      >
        Back to Home
      </Link>
    </div>
  );
}
