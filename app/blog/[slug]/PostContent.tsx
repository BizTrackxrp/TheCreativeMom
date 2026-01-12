"use client";

import { useState, useEffect } from "react";

interface PostContentProps {
  content: string;
  slug: string;
  isLikeButton: boolean;
}

export default function PostContent({ content, slug, isLikeButton }: PostContentProps) {
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

  // Render like button at top
  if (isLikeButton) {
    return (
      <div className="flex flex-col items-center gap-2 flex-shrink-0">
        <button
          onClick={handleLike}
          disabled={hasLiked}
          className={`flex items-center justify-center w-16 h-16 border-2 border-black font-bold transition-all ${
            hasLiked 
              ? 'bg-black text-white cursor-not-allowed' 
              : 'bg-white text-black hover:bg-gray-100'
          }`}
          title={hasLiked ? 'You liked this!' : 'Like this post'}
        >
          <span className="text-3xl">👍</span>
        </button>
        {likes > 0 && (
          <div className="text-center">
            <div className="text-2xl font-serif font-black">{likes}</div>
            <div className="text-xs uppercase tracking-wider text-gray-600">
              {likes === 1 ? 'Like' : 'Likes'}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Render article content
  return (
    <div className="prose prose-lg max-w-none">
      <div 
        className="article-content leading-relaxed text-gray-800"
        style={{ whiteSpace: 'pre-wrap' }}
      >
        {content}
      </div>
    </div>
  );
}
