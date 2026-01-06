"use client";

import { useState } from "react";
import Link from "next/link";

interface Review {
  id: number;
  title: string;
  type: "Movie" | "TV Show";
  year: string;
  posterUrl: string;
  review: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    title: "Caught Stealing",
    type: "Movie",
    year: "2024",
    posterUrl: "https://image.tmdb.org/t/p/w500/xFjW6p4VGKKEPKfk0gKqcXgPKjb.jpg",
    review: "Review coming soon...",
    date: "01/06/2026"
  },
  {
    id: 2,
    title: "Malcolm & Marie",
    type: "Movie",
    year: "2021",
    posterUrl: "https://image.tmdb.org/t/p/w500/5xXChAoVpilV1V69DE9wlmLgQfb.jpg",
    review: "Review coming soon...",
    date: "12/20/2025"
  },
  {
    id: 3,
    title: "The Beast in Me",
    type: "TV Show",
    year: "2024",
    posterUrl: "https://image.tmdb.org/t/p/w500/k9dN3MjPXTFCqRvfIf5s6cH5H6u.jpg",
    review: "Review coming soon...",
    date: "12/15/2025"
  },
  {
    id: 4,
    title: "Nashville",
    type: "TV Show",
    year: "2012-2018",
    posterUrl: "https://image.tmdb.org/t/p/w500/6zVKhHilAccuV4WZTBDMFsZCMxY.jpg",
    review: "Review coming soon...",
    date: "12/10/2025"
  },
  {
    id: 5,
    title: "NCIS",
    type: "TV Show",
    year: "2003-Present",
    posterUrl: "https://image.tmdb.org/t/p/w500/2exOHePjOTquUsbThPGhuEjYTyA.jpg",
    review: "Review coming soon...",
    date: "12/05/2025"
  },
  {
    id: 6,
    title: "Gossip Girl",
    type: "TV Show",
    year: "2007-2012",
    posterUrl: "https://image.tmdb.org/t/p/w500/hvDlmhoImfX5oUYS2gXxgEe4UBi.jpg",
    review: "Review coming soon...",
    date: "11/30/2025"
  }
];

export default function ScreeningNowPage() {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8 border-b-4 border-black pb-4">
        <h1 className="text-4xl font-serif font-black mb-2">SCREENING NOW</h1>
        <p className="text-sm text-gray-600">
          Film and TV reviews from The Creative Mom
        </p>
      </div>

      {/* Grid of Posters */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="group cursor-pointer"
            onClick={() => setSelectedReview(review)}
          >
            <div className="relative overflow-hidden border-2 border-black hover:shadow-2xl transition-all duration-300">
              {/* Poster Image */}
              <img
                src={review.posterUrl}
                alt={review.title}
                className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white p-4">
                  <p className="text-sm font-bold uppercase tracking-wider mb-2">
                    Click to Read Review
                  </p>
                </div>
              </div>
            </div>
            
            {/* Title & Info */}
            <div className="mt-3">
              <h3 className="font-serif font-bold text-lg leading-tight group-hover:underline">
                {review.title}
              </h3>
              <p className="text-xs uppercase tracking-wider text-gray-600 mt-1">
                {review.type} • {review.year}
              </p>
              <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">
                Reviewed {review.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedReview && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto border-4 border-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b-4 border-black p-6 flex justify-between items-start">
              <div className="flex-1">
                <h2 className="text-3xl font-serif font-black mb-2">
                  {selectedReview.title}
                </h2>
                <p className="text-sm uppercase tracking-wider text-gray-600">
                  {selectedReview.type} • {selectedReview.year}
                </p>
                <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">
                  Reviewed by Patrice • {selectedReview.date}
                </p>
              </div>
              <button
                onClick={() => setSelectedReview(null)}
                className="text-4xl font-bold hover:opacity-70 transition-opacity ml-4"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="flex gap-6 mb-6">
                <img
                  src={selectedReview.posterUrl}
                  alt={selectedReview.title}
                  className="w-48 border-2 border-black"
                />
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {selectedReview.review}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
