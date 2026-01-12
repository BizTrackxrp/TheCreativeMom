"use client";

import { useState, useEffect } from "react";

interface LikeButtonProps {
  slug: string;
}

export default function LikeButton({ slug }: LikeButtonProps) {
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
    if (hasLiked) {
      // Unlike
      const newLikes = Math.max(0, likes - 1);
      setLikes(newLikes);
      setHasLiked(false);
      localStorage.setItem(`likes-${slug}`, newLikes.toString());
      localStorage.setItem(`liked-${slug}`, "false");
    } else {
      // Like
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      localStorage.setItem(`likes-${slug}`, newLikes.toString());
      localStorage.setItem(`liked-${slug}`, "true");
    }
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <button
        onClick={handleLike}
        className={`text-4xl transition-all hover:scale-110 ${
          hasLiked ? 'opacity-100' : 'opacity-40 hover:opacity-70'
        }`}
        title={hasLiked ? 'Click to unlike' : 'Like this post'}
      >
        👍
      </button>
      {likes > 0 && (
        <div className="text-center">
          <div className="text-xl font-serif font-bold">{likes}</div>
        </div>
      )}
    </div>
  );
}
