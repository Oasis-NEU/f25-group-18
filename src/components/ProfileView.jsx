import { Trophy, Flame } from "lucide-react";

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

export default ProfileView;
