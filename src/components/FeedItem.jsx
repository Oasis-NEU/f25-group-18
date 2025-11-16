import { useState } from "react";
import { Star, Video, ArrowUp, ArrowDown } from "lucide-react";

const FeedItem = ({ index, onVideoClick }) => {
  const [likes, setLikes] = useState(45 - index * 3);
  const [hasVoted, setHasVoted] = useState(false);
  const [imageError, setImageError] = useState(false);

  const videoUrl = `/videos/video${index}.mp4`;
  const thumbnailUrl = `/videos/thumbnails/video${index}.png`;
  const [voteDirection, setVoteDirection] = useState(null);

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
      </div>
      <div
        className="rounded-xl h-64 mb-3 cursor-pointer relative group overflow-hidden"
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
        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
          <div className="bg-white rounded-full p-4 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
            <svg
              className="w-8 h-8 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    <div className="flex gap-3 mt-2 items-center justify-center">
      <button
        onClick={() => {
          if (!hasVoted) {
            setLikes(likes + 1);
            setHasVoted(true);
            setVoteDirection("up");
          }
        }}
        disabled={hasVoted}
        className={`p-2 rounded-lg transition-all ${
          hasVoted
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-green-100 text-green-600 hover:bg-green-200"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
      <span
        className={`text-sm font-semibold transition-colors ${
          voteDirection === "up"
            ? "text-green-600"
            : voteDirection === "down"
            ? "text-red-600"
            : "text-gray-800"
        }`}
      >
        {likes}
      </span>
      <button
        onClick={() => {
          if (!hasVoted) {
            setLikes(likes - 1);
            setHasVoted(true);
            setVoteDirection("down");
          }
        }}
        disabled={hasVoted}
        className={`p-2 rounded-lg transition-all ${
          hasVoted
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-red-100 text-red-600 hover:bg-red-200"
        }`}
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </div>
    </div>
  );
};

export default FeedItem;
