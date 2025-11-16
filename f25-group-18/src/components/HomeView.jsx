import { Clock, Zap, Video, Upload, ChevronRight } from "lucide-react";
import ChallengeTypes from "./ChallengeTypes";

const HomeView = ({
  isActive,
  hasSubmitted,
  timeLeft,
  startChallenge,
  submitChallenge,
  setActiveView,
}) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Calculate potential speed bonus
  const speedBonus = timeLeft > 119 ? 15 : 0;
  const totalPotentialPoints = 50 + speedBonus;

  if (!isActive && !hasSubmitted) {
    return (
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
            <Clock className="w-4 h-4" />
            Next challenge drops at random time
          </div>
          <h2 className="text-5xl font-bold text-gray-800">
            Ready for Today's Challenge?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            When the notification hits, you'll have just minutes to complete it.
            Stay alert!
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 max-w-3xl mx-auto border border-purple-100 shadow-sm">
          <div className="mb-8">
            <ChallengeTypes />
          </div>

          <button
            onClick={startChallenge}
            className="w-full bg-purple-400 text-white py-4 rounded-2xl font-bold text-lg hover:bg-purple-500 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
          >
            <Zap className="w-6 h-6" />
            Simulate Challenge Drop
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Demo mode - Click to see a challenge
          </p>
        </div>
      </div>
    );
  }

  if (isActive && !hasSubmitted) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-red-200 rounded-3xl p-8 mb-6 text-center shadow-sm animate-pulse">
          <div className="text-6xl font-bold mb-2 text-red-700">
            {formatTime(timeLeft)}
          </div>
          <div className="text-sm uppercase tracking-wider text-red-600">
            Time Remaining
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-purple-100 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-200 rounded-xl p-3">
              <Video className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Video Challenge</div>
              <div className="text-2xl font-bold text-gray-800">
                Record a 15-second video of you singing your favorite song!
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-2 border-dashed border-purple-200 rounded-2xl p-12 text-center hover:border-purple-300 transition-all cursor-pointer bg-purple-50">
              <Upload className="w-12 h-12 mx-auto mb-3 text-purple-400" />
              <div className="text-lg font-semibold mb-1 text-gray-800">
                Upload Your Submission
              </div>
              <div className="text-sm text-gray-500">
                Record or upload a video
              </div>
            </div>

            <button
              onClick={submitChallenge}
              className="w-full bg-green-300 text-gray-800 py-4 rounded-2xl font-bold text-lg hover:bg-green-400 transition-all duration-200 shadow-sm"
            >
              Submit Challenge
            </button>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
            <div className="text-sm font-semibold text-yellow-700 mb-2">
              Current Potential Rewards:
            </div>
            <div className="flex gap-4 text-sm text-gray-700">
              <div>🎯 Base: +50 pts</div>
              <div
                className={
                  speedBonus > 0 ? "text-green-600 font-bold" : "text-gray-400"
                }
              >
                ⚡ Speed Bonus: +{speedBonus} pts{" "}
                {speedBonus > 0 ? "✓" : "(Submit within 1 min!)"}
              </div>
              <div>👍 Likes: +1 pts per like</div>
            </div>
            <div className="mt-2 text-lg font-bold text-gray-800">
              Total: {totalPotentialPoints} points + likes
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Calculate the actual points earned after submission
  const actualSpeedBonus = timeLeft > 119 ? 15 : 0;
  const earnedPoints = 50 + actualSpeedBonus;

  return (
    <div className="max-w-3xl mx-auto text-center space-y-6">
      <div className="bg-green-200 rounded-3xl p-8 shadow-sm">
        <div className="text-6xl mb-4">🎉</div>
        <div className="text-3xl font-bold mb-2 text-gray-800">
          Challenge Submitted!
        </div>
        <div className="text-lg text-gray-700">
          <div>🎯 Base Points: +50</div>
          {actualSpeedBonus > 0 && (
            <div className="text-green-600 font-bold">
              ⚡ Speed Bonus: +{actualSpeedBonus}
            </div>
          )}
          {actualSpeedBonus === 0 && (
            <div className="text-gray-500">⚡ Speed Bonus: +0 (Too slow)</div>
          )}
          <div className="text-blue-600">
            👍 Likes: +1 pt per like (earn more in feed!)
          </div>
          <div className="text-2xl font-bold mt-2 text-gray-800">
            Current Total: +{earnedPoints} points
          </div>
        </div>
      </div>

      <button
        onClick={() => setActiveView("feed")}
        className="bg-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all flex items-center gap-2 mx-auto border border-purple-100 shadow-sm text-gray-800"
      >
        View Community Submissions
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HomeView;
