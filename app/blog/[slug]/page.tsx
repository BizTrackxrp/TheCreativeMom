"use client";

import { useState, useEffect } from "react";

interface PostContentProps {
  content: string;
  slug: string;
}

export default function PostContent({ content, slug }: PostContentProps) {
  const [likes, setLikes] = useState<number>(0);
  const [hasLiked, setHasLiked] = useState<boolean>(false);

  useEffect(() => {
    // Load likes from localStorage
    const storedLikes = localStorage.getItem(`likes-${slug}`);
    if (storedLikes) {
      setLikes(parseInt(storedLikes));
    }

    // Check if user has already liked
    const userLiked = localStorage.getItem(`liked-${slug}`);
    if (userLiked === "true") {
      setHasLiked(true);
    }
  }, [slug]);

  const handleLike = () => {
    if (hasLiked) return; // Prevent double-liking

    const newLikes = likes + 1;
    setLikes(newLikes);
    setHasLiked(true);

    // Save to localStorage
    localStorage.setItem(`likes-${slug}`, newLikes.toString());
    localStorage.setItem(`liked-${slug}`, "true");
  };

  return (
    <>
      {/* Article Content */}
      <div className="prose prose-lg max-w-none mb-12">
        <div 
          className="article-content leading-relaxed text-gray-800"
          style={{ whiteSpace: 'pre-wrap' }}
        >
          {content}
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
          <span className="text-2xl">👍</span>
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
    </>
  );
}
