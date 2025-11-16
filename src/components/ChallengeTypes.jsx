import { Camera, Video } from "lucide-react";

const ChallengeTypes = () => {
  const types = [
    { icon: Camera, label: "Photo", color: "pink" },
    { icon: Video, label: "Video", color: "blue" },
  ];

  const bgColors = {
    pink: "bg-pink-100",
    blue: "bg-blue-100",
  };

  const textColors = {
    pink: "text-pink-600",
    blue: "text-blue-600",
  };

  return (
    <div className="flex gap-4 justify-center">
      {types.map(({ icon: Icon, label, color }) => (
        <div
          key={label}
          className={`${bgColors[color]} rounded-2xl p-6 text-center flex-1 max-w-xs`}
        >
          <Icon className={`w-8 h-8 mx-auto mb-2 ${textColors[color]}`} />
          <div className="text-sm font-semibold text-gray-800">{label}</div>
        </div>
      ))}
    </div>
  );
};

export default ChallengeTypes;
