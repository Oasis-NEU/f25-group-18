import { Flame, Trophy } from "lucide-react";

const Header = ({ streak, points }) => (
  <div className="bg-white border-b border-purple-100">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-purple-200 rounded-xl flex items-center justify-center">
          <Flame className="w-6 h-6 text-purple-600" />
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

export default Header;
