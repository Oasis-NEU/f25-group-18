import { Zap, Users, Trophy, Award } from "lucide-react";

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

export default Navigation;
