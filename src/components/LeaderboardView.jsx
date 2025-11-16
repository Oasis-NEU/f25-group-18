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

export default LeaderboardView;
