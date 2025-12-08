import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { getCurrentDate } from "@/lib/posts";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-white">
        {/* Magazine Header Info */}
        <div className="border-b-2 border-black bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex justify-between items-center text-sm issue-tag">
              <span>{currentDate}</span>
              <span className="hidden md:inline">All about creativity</span>
              <span>Issue 12</span>
            </div>
          </div>
        </div>

        {/* Bold Masthead */}
        <header className="masthead border-b-4 border-black">
          <div className="max-w-7xl mx-auto px-4">
            <Link href="/">
              <h1 className="text-5xl md:text-7xl font-black italic tracking-tight hover:text-teal-400 transition-colors">
                THE CREATIVE MOM
              </h1>
            </Link>
            <div className="h-1 bg-white w-full max-w-2xl mx-auto mt-4"></div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="border-b-2 border-black bg-gray-50 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-center md:justify-between items-center py-4 gap-6 md:gap-8 flex-wrap">
              <Link 
                href="/" 
                className="text-sm md:text-base font-bold uppercase tracking-wider hover:text-teal-600 transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/blog?category=Behind the Scenes" 
                className="text-sm md:text-base font-bold uppercase tracking-wider hover:text-teal-600 transition-colors"
              >
                Behind the Scenes
              </Link>
              <Link 
                href="/blog?category=Screening Now" 
                className="text-sm md:text-base font-bold uppercase tracking-wider hover:text-teal-600 transition-colors"
              >
                Screening Now
              </Link>
              <Link 
                href="/blog?category=Short Stories" 
                className="text-sm md:text-base font-bold uppercase tracking-wider hover:text-teal-600 transition-colors"
              >
                Short Stories
              </Link>
              <Link 
                href="/blog?category=Photo Essays" 
                className="text-sm md:text-base font-bold uppercase tracking-wider hover:text-teal-600 transition-colors"
              >
                Photo Essays
              </Link>
              <Link 
                href="/blog" 
                className="text-sm md:text-base font-bold uppercase tracking-wider hover:text-teal-600 transition-colors"
              >
                All Posts
              </Link>
              <Link 
                href="/about" 
                className="text-sm md:text-base font-bold uppercase tracking-wider hover:text-teal-600 transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        </nav>
        
        <main className="min-h-screen bg-white">
          {children}
        </main>
        
        {/* Magazine-style Footer */}
        <footer className="border-t-4 border-black bg-black text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-serif font-black italic mb-4">
                THE CREATIVE MOM
              </h3>
              <div className="h-1 bg-teal-400 w-32 mx-auto mb-6"></div>
              <p className="text-gray-300 mb-6 text-lg">
                Behind the Scenes • Screening Now • Short Stories • Photo Essays
              </p>
              <div className="flex justify-center gap-8 mb-6 flex-wrap text-sm">
                <Link href="/" className="hover:text-teal-400 transition-colors uppercase font-semibold">
                  Home
                </Link>
                <Link href="/blog" className="hover:text-teal-400 transition-colors uppercase font-semibold">
                  All Posts
                </Link>
                <Link href="/about" className="hover:text-teal-400 transition-colors uppercase font-semibold">
                  About
                </Link>
              </div>
              <div className="border-t border-gray-700 pt-6 mt-6">
                <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()} The Creative Mom Magazine. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

