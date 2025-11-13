import React, { useState } from 'react';
import { Trophy, Flame, Crown, Zap, Users, Star, TrendingUp, Swords } from 'lucide-react';

interface User {
  name: string;
  points: number;
  rank: string;
  winStreak: number;
  avatar: string;
}

interface Challenge {
  id: number;
  title: string;
  description: string;
  points: number;
  progress: number;
  total: number;
  icon: JSX.Element;
  category: string;
}

interface Wager {
  id: number;
  opponent: string;
  challenge: string;
  points: number;
  status: 'pending' | 'active';
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  trend: 'up' | 'down' | 'same';
  isUser?: boolean;
}

type TabType = 'daily' | 'weekly';

export default function ChallengeHome() {
  const [activeTab, setActiveTab] = useState<TabType>('daily');
  
  // Mock user data
  const user: User = {
    name: "Alex Chen",
    points: 1247,
    rank: "Gold III",
    winStreak: 5,
    avatar: "AC"
  };
  
  // Mock daily challenges - rotating selection from the full list
  const dailyChallenges: Challenge[] = [
    { id: 1, title: "Do 50 push-ups", description: "Complete all at once or throughout the day", points: 50, progress: 32, total: 50, icon: <Flame className="w-5 h-5" />, category: "Fitness" },
    { id: 2, title: "Read for 30 minutes", description: "Any book or article", points: 40, progress: 18, total: 30, icon: <Star className="w-5 h-5" />, category: "Productivity" },
    { id: 3, title: "Drink 2 liters of water", description: "Stay hydrated all day", points: 40, progress: 1.2, total: 2, icon: <Zap className="w-5 h-5" />, category: "Health" },
    { id: 4, title: "Text a friend you haven't spoken to", description: "Reconnect with someone", points: 30, progress: 0, total: 1, icon: <Users className="w-5 h-5" />, category: "Social" },
    { id: 5, title: "Go screen-free for one hour", description: "No distractions", points: 20, progress: 0, total: 60, icon: <Star className="w-5 h-5" />, category: "Wellness" }
  ];
  
  // Mock weekly challenges
  const weeklyChallenges: Challenge[] = [
    { id: 1, title: "Complete 10,000 steps daily", description: "Use a tracker or estimate", points: 350, progress: 4, total: 7, icon: <Trophy className="w-5 h-5" />, category: "Fitness" },
    { id: 2, title: "Win 5 Wager Challenges", description: "Challenge your friends", points: 200, progress: 2, total: 5, icon: <Crown className="w-5 h-5" />, category: "Competition" },
    { id: 3, title: "Avoid social media for 12 hours each day", description: "Digital detox week", points: 420, progress: 3, total: 7, icon: <Flame className="w-5 h-5" />, category: "Wellness" },
    { id: 4, title: "Complete 3 challenges daily", description: "Stay consistent all week", points: 700, progress: 2, total: 7, icon: <Zap className="w-5 h-5" />, category: "Bonus" }
  ];
  
  // Mock active wagers
  const activeWagers: Wager[] = [
    { id: 1, opponent: "Jordan Lee", challenge: "Run 5K Faster", points: 100, status: "pending" },
    { id: 2, opponent: "Sam Park", challenge: "Chess Match", points: 75, status: "active" }
  ];
  
  // Mock leaderboard
  const leaderboard: LeaderboardEntry[] = [
    { rank: 1, name: "Taylor Swift", points: 2456, trend: "up" },
    { rank: 2, name: "Jamie Chen", points: 2103, trend: "same" },
    { rank: 3, name: "Alex Chen", points: 1247, trend: "up", isUser: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-xl">
              <Swords className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Challenge Me</h1>
              <p className="text-sm text-purple-300">Compete. Conquer. Climb.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <p className="text-sm text-purple-300">Your Points</p>
              <p className="text-2xl font-bold text-yellow-400">{user.points}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold">
                  {user.avatar}
                </div>
                <div className="hidden sm:block">
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-purple-300">{user.rank}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-300 text-sm">Current Rank</p>
                <p className="text-2xl font-bold">{user.rank}</p>
              </div>
              <Crown className="w-10 h-10 text-yellow-400" />
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-300 text-sm">Win Streak</p>
                <p className="text-2xl font-bold">{user.winStreak} 🔥</p>
              </div>
              <Flame className="w-10 h-10 text-orange-400" />
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-300 text-sm">Active Wagers</p>
                <p className="text-2xl font-bold">{activeWagers.length}</p>
              </div>
              <Trophy className="w-10 h-10 text-blue-400" />
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Challenges */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Wager Section */}
            <div className="bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Swords className="w-6 h-6" />
                <h2 className="text-xl font-bold">Create New Wager</h2>
              </div>
              <p className="text-purple-100 mb-4">Challenge a friend and put your points on the line!</p>
              <button className="w-full bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-purple-50 transition-colors shadow-lg">
                Challenge a Friend
              </button>
            </div>

            {/* Daily/Weekly Challenges */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setActiveTab('daily')}
                  className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
                    activeTab === 'daily' 
                      ? 'bg-yellow-500 text-black' 
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  Daily Challenges
                </button>
                <button
                  onClick={() => setActiveTab('weekly')}
                  className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
                    activeTab === 'weekly' 
                      ? 'bg-yellow-500 text-black' 
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  Weekly Challenges
                </button>
              </div>

              <div className="space-y-4">
                {(activeTab === 'daily' ? dailyChallenges : weeklyChallenges).map((challenge) => (
                  <div key={challenge.id} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500/30 p-2 rounded-lg">
                        {challenge.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold">{challenge.title}</h3>
                          <span className="text-yellow-400 font-bold">+{challenge.points} pts</span>
                        </div>
                        <p className="text-sm text-purple-300 mb-2">{challenge.description}</p>
                        <div className="w-full bg-black/30 rounded-full h-2 mb-2">
                          <div 
                            className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all"
                            style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-purple-300">
                            {activeTab === 'daily' 
                              ? `${challenge.progress} / ${challenge.total} ${challenge.category}`
                              : `${challenge.progress} / ${challenge.total} days`
                            }
                          </p>
                          <span className="text-xs bg-purple-500/20 text-purple-200 px-2 py-1 rounded-full">
                            {challenge.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Wagers */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <h2 className="text-xl font-bold">Your Active Wagers</h2>
              </div>
              <div className="space-y-3">
                {activeWagers.map((wager) => (
                  <div key={wager.id} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">vs {wager.opponent}</p>
                        <p className="text-sm text-purple-300">{wager.challenge}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-yellow-400 font-bold">{wager.points} pts</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          wager.status === 'active' 
                            ? 'bg-green-500/20 text-green-300' 
                            : 'bg-orange-500/20 text-orange-300'
                        }`}>
                          {wager.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Leaderboard */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 sticky top-4">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-yellow-400" />
                <h2 className="text-xl font-bold">Leaderboard</h2>
              </div>
              <div className="space-y-3">
                {leaderboard.map((player) => (
                  <div 
                    key={player.rank} 
                    className={`rounded-lg p-4 ${
                      player.isUser 
                        ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-2 border-purple-400' 
                        : 'bg-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          player.rank === 1 ? 'bg-yellow-500 text-black' :
                          player.rank === 2 ? 'bg-gray-300 text-black' :
                          player.rank === 3 ? 'bg-orange-600' : 'bg-purple-600'
                        }`}>
                          {player.rank}
                        </div>
                        <div>
                          <p className="font-semibold">{player.name}</p>
                          <p className="text-sm text-purple-300">{player.points} points</p>
                        </div>
                      </div>
                      <div className={`text-sm ${
                        player.trend === 'up' ? 'text-green-400' : 'text-gray-400'
                      }`}>
                        {player.trend === 'up' ? '↑' : '—'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 bg-white/5 hover:bg-white/10 py-2 px-4 rounded-lg font-semibold transition-colors border border-white/20">
                View Full Leaderboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}