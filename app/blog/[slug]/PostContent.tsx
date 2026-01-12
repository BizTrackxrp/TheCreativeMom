"use client";

interface PostContentProps {
  content: string;
}

export default function PostContent({ content }: PostContentProps) {
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
