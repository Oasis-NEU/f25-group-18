import { useState } from "react";
import FeedItem from "./FeedItem";

const FeedView = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="min-h-screen bg-purple-50">
      <div className="bg-white border-b border-purple-100 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-800">Community Feed</h2>
          <p className="text-sm text-gray-500">Today's submissions</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-6 space-y-6 pb-24">
        {[1, 2, 3, 4, 5].map((i) => (
          <FeedItem key={i} index={i} onVideoClick={setSelectedVideo} />
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="bg-white rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Video Submission
              </h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-gray-500 hover:text-gray-700 text-3xl leading-none font-light hover:rotate-90 transition-transform"
              >
                ×
              </button>
            </div>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full rounded-2xl bg-black"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedView;
