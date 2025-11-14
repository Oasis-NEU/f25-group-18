import React from 'react';

interface Challenge {
  id: number;
  title: string;
  description: string;
  points: number;
  category: string;
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
}

export default function Home() {
  // Hardcoded daily challenges (3)
  const dailyChallenges: Challenge[] = [
    {
      id: 1,
      title: "Complete 50 Push-ups",
      description: "Push yourself to complete 50 push-ups today. You can do them all at once or throughout the day.",
      points: 50,
      category: "Fitness"
    },
    {
      id: 2,
      title: "Read for 30 Minutes",
      description: "Take time to read any book or article for at least 30 minutes. Expand your mind!",
      points: 40,
      category: "Learning"
    },
    {
      id: 3,
      title: "Drink 8 Glasses of Water",
      description: "Stay hydrated by drinking 8 glasses of water throughout the day.",
      points: 35,
      category: "Health"
    }
  ];

  // Hardcoded weekly challenge (1)
  const weeklyChallenge: Challenge = {
    id: 4,
    title: "10,000 Steps Daily",
    description: "Walk 10,000 steps every day this week. Track your progress and stay active!",
    points: 200,
    category: "Fitness"
  };

  // Hardcoded leaderboard
  const leaderboard: LeaderboardEntry[] = [
    { rank: 1, name: "Alex Johnson", points: 2845 },
    { rank: 2, name: "Sarah Chen", points: 2650 },
    { rank: 3, name: "Mike Davis", points: 2490 },
    { rank: 4, name: "Emma Wilson", points: 2320 },
    { rank: 5, name: "David Lee", points: 2180 },
    { rank: 6, name: "Lisa Anderson", points: 2050 },
    { rank: 7, name: "Tom Brown", points: 1920 },
    { rank: 8, name: "Maria Garcia", points: 1810 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Challenge Me in display font */}
      <header className="bg-red-600 text-white py-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-display font-bold text-center">
            Challenge Me
          </h1>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Center Section - Challenges */}
          <div className="lg:col-span-2 space-y-8">
            {/* Daily Challenges Section */}
            <section>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Daily Challenges</h2>
              <div className="space-y-4">
                {dailyChallenges.map((challenge) => (
                  <div
                    key={challenge.id}
                    className="bg-white border-2 border-red-600 rounded-lg p-6 shadow-md hover:shadow-xl hover:bg-red-50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-red-600 mb-2">{challenge.title}</h3>
                        <p className="text-gray-700 mb-3">{challenge.description}</p>
                      </div>
                      <span className="ml-4 px-4 py-2 bg-red-600 text-white font-bold rounded-lg">
                        {challenge.points} pts
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                        {challenge.category}
                      </span>
                      <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200">
                        Start Challenge
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Weekly Challenge Section */}
            <section>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Weekly Challenge</h2>
              <div className="bg-white border-2 border-red-600 rounded-lg p-6 shadow-md hover:shadow-xl hover:bg-red-50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-red-600 mb-2">{weeklyChallenge.title}</h3>
                    <p className="text-gray-700 mb-3">{weeklyChallenge.description}</p>
                  </div>
                  <span className="ml-4 px-4 py-2 bg-red-600 text-white font-bold rounded-lg">
                    {weeklyChallenge.points} pts
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                    {weeklyChallenge.category}
                  </span>
                  <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200">
                    Start Challenge
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Right Side - Leaderboard */}
          <div className="lg:col-span-1">
            <section className="bg-white border-2 border-red-600 rounded-lg p-6 shadow-md sticky top-6">
              <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">Leaderboard</h2>
              <div className="space-y-3">
                {leaderboard.map((entry) => (
                  <div
                    key={entry.rank}
                    className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 ${
                      entry.rank <= 3
                        ? 'bg-red-50 border-2 border-red-300 hover:bg-red-100'
                        : 'bg-white border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                          entry.rank === 1
                            ? 'bg-yellow-500'
                            : entry.rank === 2
                            ? 'bg-gray-400'
                            : entry.rank === 3
                            ? 'bg-orange-400'
                            : 'bg-red-600'
                        }`}
                      >
                        {entry.rank}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{entry.name}</p>
                        <p className="text-sm text-gray-600">{entry.points.toLocaleString()} points</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
