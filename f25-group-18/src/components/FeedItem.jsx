import { useState } from "react";
import { Star, Video } from "lucide-react";

const FeedItem = ({ index, onVideoClick }) => {
  const [likes, setLikes] = useState(45 - index * 3);
  const [hasVoted, setHasVoted] = useState(false);
  const [imageError, setImageError] = useState(false);

  const videoUrl = `/videos/video${index}.mp4`;
  const thumbnailUrl = `/videos/thumbnails/video${index}.png`;

  const userNames = {
    1: "Justin X",
    2: "Jett R",
    3: "Ducan L",
    4: "Po K",
    5: "Vinh T",
  };

  const handleVote = () => {
    if (!hasVoted) {
      setLikes(likes + 1);
      setHasVoted(true);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-pink-200 rounded-full"></div>
        <div className="flex-1">
          <div className="font-semibold text-gray-800">{userNames[index]}</div>
          <div className="text-xs text-gray-500">Submitted {index} min ago</div>
        </div>
        <div className="flex items-center gap-1 text-yellow-600">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-semibold">{likes}</span>
        </div>
      </div>
      <div
        className="rounded-xl h-64 mb-3 cursor-pointer relative group overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500"
        onClick={() => onVideoClick(videoUrl)}
      >
        {!imageError ? (
          <img
            src={thumbnailUrl}
            alt={`Video ${index} thumbnail`}
            className="w-full h-full object-cover"
            onError={() => {
              console.log(`Failed to load thumbnail: ${thumbnailUrl}`);
              setImageError(true);
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Video className="w-16 h-16 text-white opacity-50" />
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
          <div className="bg-white rounded-full p-4 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleVote}
          disabled={hasVoted}
          className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
            hasVoted
              ? "bg-green-100 text-green-700 cursor-not-allowed"
              : "bg-blue-50 text-gray-700 hover:bg-blue-100"
          }`}
        >
          {hasVoted ? "✓ Voted" : "👍 Vote"}
        </button>
        <button className="px-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all text-gray-700">
          💬
        </button>
      </div>
    </div>
  );
};

export default FeedItem;
