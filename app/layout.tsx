"use client";

import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const merriweather = Merriweather({ 
  weight: ['300', '400', '700', '900'],
  subsets: ["latin"], 
  variable: '--font-merriweather' 
});

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Desktop Header - Simplified */}
      <div className="hidden md:block">
        {/* Newspaper Masthead */}
        <header className="border-b-4 border-black bg-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <Link href="/">
              <h1 className="text-center text-7xl font-black font-serif tracking-tight hover:opacity-70 transition-opacity">
                THE CREATIVE MOM
              </h1>
            </Link>
          </div>
        </header>
      </div>

      {/* Mobile Header - Simplified */}
      <div className="md:hidden sticky top-0 z-40 bg-white border-b-2 border-black">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Hamburger Menu - Left Side */}
          <button 
            onClick={() => setIsOpen(true)}
            className="text-3xl p-2"
            aria-label="Open menu"
          >
            ☰
          </button>

          {/* Logo - Center */}
          <Link href="/" onClick={closeMenu}>
            <h1 className="text-2xl font-black font-serif tracking-tight">
              THE CREATIVE MOM
            </h1>
          </Link>

          {/* Empty space for balance */}
          <div className="w-12"></div>
        </div>
      </div>

      {/* Navigation - Desktop */}
      <nav className="border-b-2 border-black bg-white sticky top-0 z-40 hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center md:justify-between items-center py-3 gap-8 text-sm">
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

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
            onClick={closeMenu}
          />
          
          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-80 bg-white border-r-4 border-black z-50 md:hidden overflow-y-auto">
            <div className="p-6">
              {/* Close button */}
              <button 
                onClick={closeMenu}
                className="absolute top-4 right-4 text-3xl font-bold"
              >
                ×
              </button>

              {/* Sidebar Header */}
              <h2 className="text-2xl font-serif font-black mb-2 mt-2">
                THE CREATIVE MOM
              </h2>
              <p className="text-xs uppercase tracking-widest text-gray-600 mb-6 pb-6 border-b-2 border-black">
                Navigation
              </p>

              {/* Sidebar Links */}
              <div className="space-y-1">
                <Link 
                  href="/" 
                  onClick={closeMenu}
                  className="block font-bold uppercase tracking-wider hover:bg-gray-100 text-sm py-3 px-2 border-b border-gray-200"
                >
                  Home
                </Link>
                <Link 
                  href="/blog?category=Behind the Scenes" 
                  onClick={closeMenu}
                  className="block font-bold uppercase tracking-wider hover:bg-gray-100 text-sm py-3 px-2 border-b border-gray-200"
                >
                  Behind the Scenes
                </Link>
                <Link 
                  href="/blog?category=Screening Now" 
                  onClick={closeMenu}
                  className="block font-bold uppercase tracking-wider hover:bg-gray-100 text-sm py-3 px-2 border-b border-gray-200"
                >
                  Screening Now
                </Link>
                <Link 
                  href="/blog?category=Short Stories" 
                  onClick={closeMenu}
                  className="block font-bold uppercase tracking-wider hover:bg-gray-100 text-sm py-3 px-2 border-b border-gray-200"
                >
                  Short Stories
                </Link>
                <Link 
                  href="/blog?category=Photo Essays" 
                  onClick={closeMenu}
                  className="block font-bold uppercase tracking-wider hover:bg-gray-100 text-sm py-3 px-2 border-b border-gray-200"
                >
                  Photo Essays
                </Link>
                <Link 
                  href="/blog" 
                  onClick={closeMenu}
                  className="block font-bold uppercase tracking-wider hover:bg-gray-100 text-sm py-3 px-2 border-b border-gray-200"
                >
                  All Posts
                </Link>
                <Link 
                  href="/about" 
                  onClick={closeMenu}
                  className="block font-bold uppercase tracking-wider hover:bg-gray-100 text-sm py-3 px-2"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans bg-white">
        <Navigation />
        
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
