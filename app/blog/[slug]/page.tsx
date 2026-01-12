"use client";

import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";
import { useState, useEffect } from "react";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function PostPage({ params }: PageProps) {
  const [slug, setSlug] = useState<string>("");
  const [post, setPost] = useState<any>(null);
  const [likes, setLikes] = useState<number>(0);
  const [hasLiked, setHasLiked] = useState<boolean>(false);

  useEffect(() => {
    params.then(({ slug: resolvedSlug }) => {
      setSlug(resolvedSlug);
      const postData = getPostBySlug(resolvedSlug);
      
      if (!postData) {
        notFound();
      }
      
      setPost(postData);

      // Load likes from localStorage
      const storedLikes = localStorage.getItem(`likes-${resolvedSlug}`);
      if (storedLikes) {
        setLikes(parseInt(storedLikes));
      }

      // Check if user has already liked
      const userLiked = localStorage.getItem(`liked-${resolvedSlug}`);
      if (userLiked === "true") {
        setHasLiked(true);
      }
    });
  }, [params]);

  const handleLike = () => {
    if (hasLiked) return; // Prevent double-liking

    const newLikes = likes + 1;
    setLikes(newLikes);
    setHasLiked(true);

    // Save to localStorage
    localStorage.setItem(`likes-${slug}`, newLikes.toString());
    localStorage.setItem(`liked-${slug}`, "true");
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <Link 
        href="/"
        className="inline-block mb-6 text-sm uppercase tracking-wide hover:underline"
      >
        ← Back to Home
      </Link>

      {/* Article Header */}
      <article className="border-b-4 border-black pb-8 mb-8">
        <div className="mb-4">
          <span className="inline-block bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-widest">
            {post.category}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif font-black mb-6 leading-tight">
          {post.title}
        </h1>
        
        <div className="text-sm uppercase tracking-wider text-gray-600 mb-6">
          By Patrice • {format(new Date(post.date), 'MM/dd/yyyy')}
        </div>

        <p className="text-xl text-gray-700 leading-relaxed italic border-l-4 border-black pl-6">
          {post.excerpt}
        </p>
      </article>

      {/* Featured Image (if exists) */}
      {post.coverImage && (
        <div className="mb-12">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full max-w-2xl mx-auto"
          />
        </div>
      )}

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <div 
          className="article-content leading-relaxed text-gray-800"
          style={{ whiteSpace: 'pre-wrap' }}
        >
          {post.content}
        </div>
      </div>

      {/* Like Button */}
      <div className="mt-12 pt-8 border-t-2 border-black flex items-center justify-center gap-4">
        <button
          onClick={handleLike}
          disabled={hasLiked}
          className={`flex items-center gap-3 px-6 py-3 border-2 border-black font-bold uppercase tracking-wide transition-all ${
            hasLiked 
              ? 'bg-black text-white cursor-not-allowed' 
              : 'bg-white text-black hover:bg-gray-100'
          }`}
        >
          <span className="text-2xl">{hasLiked ? '👍' : '👍'}</span>
          <span className="text-sm">
            {hasLiked ? 'You liked this!' : 'Like this post'}
          </span>
        </button>
        <div className="text-center">
          <div className="text-3xl font-serif font-black">{likes}</div>
          <div className="text-xs uppercase tracking-wider text-gray-600">
            {likes === 1 ? 'Like' : 'Likes'}
          </div>
        </div>
      </div>

      {/* Back to Home */}
      <div className="mt-8 text-center">
        <Link 
          href="/"
          className="inline-block bg-black text-white px-8 py-3 font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors text-sm"
        >
          ← Back to All Stories
        </Link>
      </div>
    </div>
  );
}
