import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { getCurrentDate } from "@/lib/posts";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const merriweather = Merriweather({ 
  weight: ['300', '400', '700', '900'],
  subsets: ["latin"], 
  variable: '--font-merriweather' 
});

export const metadata: Metadata = {
  title: "The Creative Mom - Magazine",
  description: "Behind the scenes, screening now, short stories, and photo essays",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentDate = getCurrentDate();
  
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans bg-white">
        {/* Newspaper Header Info */}
        <div className="border-b border-black bg-white">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex justify-between items-center text-xs uppercase tracking-widest">
              <span className="font-semibold">{currentDate}</span>
              <span className="hidden md:inline font-light">All about creativity</span>
              <span className="font-semibold">Issue 12</span>
            </div>
          </div>
        </div>

        {/* Newspaper Masthead */}
        <header className="border-b-4 border-black bg-white py-6">
          <div className="max-w-7xl mx-auto px-4">
            <Link href="/">
              <h1 className="text-center text-5xl md:text-7xl font-black font-serif tracking-tight hover:opacity-70 transition-opacity">
                THE CREATIVE MOM
              </h1>
            </Link>
            <div className="border-t border-black w-full max-w-xl mx-auto mt-3"></div>
            <p className="text-center text-xs uppercase tracking-widest mt-2 text-gray-600">
              Behind the Scenes • Screening Now • Stories & Essays
            </p>
          </div>
        </header>

        {/* Navigation - Desktop */}
        <nav className="border-b-2 border-black bg-white sticky top-0 z-50 hidden md:block">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-center md:justify-between items-center py-3 gap-8 flex-wrap text-sm">
              <Link 
                href="/" 
                className="font-bold uppercase tracking-wider hover:underline transition-all"
              >
                Home
              </Link>
              <Link 
                href="/blog?category=Behind the Scenes" 
                className="font-bold uppercase tracking-wider hover:underline transition-all"
              >
                Behind the Scenes
              </Link>
              <Link 
                href="/blog?category=Screening Now" 
                className="font-bold uppercase tracking-wider hover:underline transition-all"
              >
                Screening Now
              </Link>
              <Link 
                href="/blog?category=Short Stories" 
                className="font-bold uppercase tracking-wider hover:underline transition-all"
              >
                Short Stories
              </Link>
              <Link 
                href="/blog?category=Photo Essays" 
                className="font-bold uppercase tracking-wider hover:underline transition-all"
              >
                Photo Essays
              </Link>
              <Link 
                href="/blog" 
                className="font-bold uppercase tracking-wider hover:underline transition-all"
              >
                All Posts
              </Link>
              <Link 
                href="/about" 
                className="font-bold uppercase tracking-wider hover:underline transition-all"
              >
                About
              </Link>
            </div>
          </div>
        </nav>

        {/* Navigation - Mobile Hamburger */}
        <nav className="border-b-2 border-black bg-white sticky top-0 z-50 md:hidden">
          <div className="px-4 py-3">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-bold uppercase tracking-wider text-sm">Menu</span>
                <span className="text-2xl group-open:rotate-90 transition-transform">☰</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-black space-y-3">
                <Link 
                  href="/" 
                  className="block font-bold uppercase tracking-wider hover:underline text-sm py-2"
                >
                  Home
                </Link>
                <Link 
                  href="/blog?category=Behind the Scenes" 
                  className="block font-bold uppercase tracking-wider hover:underline text-sm py-2"
                >
                  Behind the Scenes
                </Link>
                <Link 
                  href="/blog?category=Screening Now" 
                  className="block font-bold uppercase tracking-wider hover:underline text-sm py-2"
                >
                  Screening Now
                </Link>
                <Link 
                  href="/blog?category=Short Stories" 
                  className="block font-bold uppercase tracking-wider hover:underline text-sm py-2"
                >
                  Short Stories
                </Link>
                <Link 
                  href="/blog?category=Photo Essays" 
                  className="block font-bold uppercase tracking-wider hover:underline text-sm py-2"
                >
                  Photo Essays
                </Link>
                <Link 
                  href="/blog" 
                  className="block font-bold uppercase tracking-wider hover:underline text-sm py-2"
                >
                  All Posts
                </Link>
                <Link 
                  href="/about" 
                  className="block font-bold uppercase tracking-wider hover:underline text-sm py-2"
                >
                  About
                </Link>
              </div>
            </details>
          </div>
        </nav>
        
        <main className="min-h-screen bg-white">
          {children}
        </main>
        
        {/* Newspaper Footer */}
        <footer className="border-t-4 border-black bg-white mt-20">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center border-b border-gray-300 pb-6 mb-6">
              <h3 className="text-4xl font-serif font-black mb-2">
                THE CREATIVE MOM
              </h3>
              <p className="text-xs uppercase tracking-widest text-gray-600">
                Behind the Scenes • Screening Now • Short Stories • Photo Essays
              </p>
            </div>
            <div className="flex justify-center gap-8 mb-6 flex-wrap text-sm">
              <Link href="/" className="hover:underline uppercase font-semibold">
                Home
              </Link>
              <Link href="/blog" className="hover:underline uppercase font-semibold">
                All Posts
              </Link>
              <Link href="/about" className="hover:underline uppercase font-semibold">
                About
              </Link>
            </div>
            <div className="text-center pt-6 border-t border-gray-300">
              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} The Creative Mom. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
