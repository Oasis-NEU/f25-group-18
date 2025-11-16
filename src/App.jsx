import "./App.css";
import React, { useState, useEffect } from "react";
import {
  Camera,
  Video,
  FileText,
  Gamepad2,
  Trophy,
  Users,
  Clock,
  Zap,
  Flame,
  Award,
  ChevronRight,
  Upload,
  Star,
} from "lucide-react";

// Header Component
const Header = ({ streak, points }) => (
  <div className="bg-white border-b border-purple-100">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-purple-200 rounded-xl flex items-center justify-center">
          <Zap className="w-6 h-6 text-purple-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Challenge Me!</h1>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
          <Flame className="w-5 h-5 text-orange-500" />
          <span className="font-bold text-gray-800">{streak} Day Streak</span>
        </div>
        <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full">
          <Trophy className="w-5 h-5 text-yellow-600" />
          <span className="font-bold text-gray-800">
            {points.toLocaleString()} pts
          </span>
        </div>
      </div>
    </div>
  </div>
);

// Navigation Component
const Navigation = ({ activeView, setActiveView }) => {
  const navItems = [
    { id: "home", icon: Zap, label: "Challenge" },
    { id: "feed", icon: Users, label: "Feed" },
    { id: "leaderboard", icon: Trophy, label: "Leaderboard" },
    { id: "profile", icon: Award, label: "Profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-purple-100 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-around">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveView(id)}
            className={`flex flex-col items-center gap-1 ${
              activeView === id ? "text-purple-500" : "text-gray-400"
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs font-semibold">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Challenge Types Component
const ChallengeTypes = () => {
  const types = [
    { icon: Camera, label: "Photo", color: "pink" },
    { icon: Video, label: "Video", color: "blue" },
  ];

  // map all color variants you need
  const bgColors = {
    pink: "bg-pink-100",
    blue: "bg-blue-100",
  };

  const textColors = {
    pink: "text-pink-600",
    blue: "text-blue-600",
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {types.map(({ icon: Icon, label, color }) => (
        <div
          key={label}
          className={`${bgColors[color]} rounded-2xl p-6 text-center`}
        >
          <Icon className={`w-8 h-8 mx-auto mb-2 ${textColors[color]}`} />
          <div className="text-sm font-semibold text-gray-800">{label}</div>
        </div>
      ))}
    </div>
  );
};

// Home View Component
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
            <div className="bg-pink-200 rounded-xl p-3">
              <Camera className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Photo Challenge</div>
              <div className="text-2xl font-bold text-gray-800">
                Take a picture of something blue
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
                Take or upload a photo
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
              Potential Rewards:
            </div>
            <div className="flex gap-4 text-sm text-gray-700">
              <div>🎯 Base: +50 pts</div>
              <div>⚡ Speed: +15 pts</div>
              <div>✨ Creativity: Up to +25 pts</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto text-center space-y-6">
      <div className="bg-green-200 rounded-3xl p-8 shadow-sm">
        <div className="text-6xl mb-4">🎉</div>
        <div className="text-3xl font-bold mb-2 text-gray-800">
          Challenge Submitted!
        </div>
        <div className="text-lg text-gray-700">+75 points earned</div>
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

// Feed Item Component
const FeedItem = ({ index }) => (
  <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-sm">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 bg-pink-200 rounded-full"></div>
      <div className="flex-1">
        <div className="font-semibold text-gray-800">User {index}</div>
        <div className="text-xs text-gray-500">Submitted {index} min ago</div>
      </div>
      <div className="flex items-center gap-1 text-yellow-600">
        <Star className="w-4 h-4 fill-current" />
        <span className="text-sm font-semibold">{45 - index * 3}</span>
      </div>
    </div>
    <div className="bg-purple-100 rounded-xl h-64 mb-3 flex items-center justify-center">
      <Camera className="w-12 h-12 text-purple-300" />
    </div>
    <div className="flex gap-2">
      <button className="flex-1 bg-blue-50 py-2 rounded-lg font-semibold hover:bg-blue-100 transition-all text-gray-700">
        👍 Vote
      </button>
      <button className="px-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all text-gray-700">
        💬
      </button>
    </div>
  </div>
);

// Feed View Component
const FeedView = () => (
  <div className="min-h-screen bg-pink-50">
    <div className="bg-white border-b border-purple-100 sticky top-0 z-10 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-800">Community Feed</h2>
        <p className="text-sm text-gray-500">Today's submissions</p>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-6 py-6 space-y-6 pb-24">
      {[1, 2, 3, 4, 5].map((i) => (
        <FeedItem key={i} index={i} />
      ))}
    </div>
  </div>
);

// Leaderboard View Component
const LeaderboardView = () => (
  <div className="min-h-screen bg-blue-50">
    <div className="bg-white border-b border-purple-100 sticky top-0 z-10 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-800">Leaderboard</h2>
        <p className="text-sm text-gray-500">Top challengers this week</p>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-6 py-6 pb-24">
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-200 rounded-2xl p-6 text-center shadow-sm">
          <div className="text-4xl mb-2">🥈</div>
          <div className="font-bold text-gray-800">User 2</div>
          <div className="text-2xl font-bold mt-2 text-gray-700">4,320</div>
          <div className="text-xs text-gray-500">points</div>
        </div>
        <div className="bg-yellow-200 rounded-2xl p-6 text-center transform shadow-sm">
          <div className="text-4xl mb-2">👑</div>
          <div className="font-bold text-gray-800">User 1</div>
          <div className="text-3xl font-bold mt-2 text-gray-800">5,890</div>
          <div className="text-xs text-gray-600">points</div>
        </div>
        <div className="bg-orange-200 rounded-2xl p-6 text-center shadow-sm">
          <div className="text-4xl mb-2">🥉</div>
          <div className="font-bold text-gray-800">User 3</div>
          <div className="text-2xl font-bold mt-2 text-gray-700">3,750</div>
          <div className="text-xs text-gray-500">points</div>
        </div>
      </div>

      <div className="space-y-3">
        {[4, 5, 6, 7, 8, 9, 10].map((rank) => (
          <div
            key={rank}
            className="bg-white rounded-xl p-4 flex items-center gap-4 border border-purple-100 shadow-sm"
          >
            <div className="text-2xl font-bold text-purple-400 w-8">
              #{rank}
            </div>
            <div className="w-10 h-10 bg-blue-200 rounded-full"></div>
            <div className="flex-1">
              <div className="font-semibold text-gray-800">User {rank}</div>
              <div className="text-xs text-gray-500">
                Level {Math.floor(rank / 2) + 3}
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-lg text-gray-800">
                {3500 - rank * 100}
              </div>
              <div className="text-xs text-gray-500">points</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Profile View Component
const ProfileView = ({ points, streak }) => (
  <div className="min-h-screen bg-purple-50">
    <div className="bg-white border-b border-purple-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center">
        <div className="w-24 h-24 bg-pink-200 rounded-full mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold text-gray-800">Your Profile</h2>
        <p className="text-gray-500">Level 12 Challenger</p>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-6 py-6 space-y-6 pb-24">
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-yellow-200 rounded-2xl p-6 text-center shadow-sm">
          <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-700" />
          <div className="text-3xl font-bold text-gray-800">
            {points.toLocaleString()}
          </div>
          <div className="text-sm font-semibold text-gray-700">
            Total Points
          </div>
        </div>
        <div className="bg-orange-200 rounded-2xl p-6 text-center shadow-sm">
          <Flame className="w-8 h-8 mx-auto mb-2 text-orange-600" />
          <div className="text-3xl font-bold text-gray-800">{streak}</div>
          <div className="text-sm font-semibold text-gray-700">Day Streak</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Badges Earned</h3>
        <div className="grid grid-cols-4 gap-3">
          {["🔥", "⚡", "🎯", "🏆", "⭐", "💎", "🎨", "🚀"].map((badge, i) => (
            <div
              key={i}
              className="bg-purple-100 rounded-xl p-4 text-center text-3xl"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-gray-800">
          Challenge History
        </h3>
        <div className="space-y-3">
          {["Photo Challenge", "Video Challenge", "Trivia Challenge"].map(
            (type, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 bg-purple-50 rounded-xl"
              >
                <div>
                  <div className="font-semibold text-gray-800">{type}</div>
                  <div className="text-xs text-gray-500">{i + 1} days ago</div>
                </div>
                <div className="text-green-600 font-bold">
                  +{75 - i * 10} pts
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  </div>
);

// Main App Component
export default function App() {
  const [activeView, setActiveView] = useState("home");
  const [timeLeft, setTimeLeft] = useState(179);
  const [isActive, setIsActive] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [streak, setStreak] = useState(7);
  const [points, setPoints] = useState(2450);

  useEffect(() => {
    let interval;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startChallenge = () => {
    setIsActive(true);
    setHasSubmitted(false);
    setTimeLeft(179);
  };

  const submitChallenge = () => {
    setHasSubmitted(true);
    setIsActive(false);
    setPoints((prev) => prev + 75);
  };

  return (
    <div className="min-h-screen">
      {activeView === "home" && (
        <div className="min-h-screen bg-purple-50">
          <Header streak={streak} points={points} />
          <div className="max-w-6xl mx-auto px-6 py-6 pb-24">
            <HomeView
              isActive={isActive}
              hasSubmitted={hasSubmitted}
              timeLeft={timeLeft}
              startChallenge={startChallenge}
              submitChallenge={submitChallenge}
              setActiveView={setActiveView}
            />
          </div>
          <Navigation activeView={activeView} setActiveView={setActiveView} />
        </div>
      )}

      {activeView === "feed" && (
        <>
          <FeedView />
          <Navigation activeView={activeView} setActiveView={setActiveView} />
        </>
      )}

      {activeView === "leaderboard" && (
        <>
          <LeaderboardView />
          <Navigation activeView={activeView} setActiveView={setActiveView} />
        </>
      )}

      {activeView === "profile" && (
        <>
          <ProfileView points={points} streak={streak} />
          <Navigation activeView={activeView} setActiveView={setActiveView} />
        </>
      )}
    </div>
  );
}
