// src/pages/LoginPage.jsx
import { useState, useEffect } from 'react';

// Load bubble font from Google Fonts
const loadBubbleFont = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Rubik+Bubbles&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

export default function LoginPage({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadBubbleFont();
  }, []);

  const handleSubmit = async () => {
    setError('');
    
    // Validation
    if (!email || !password || (!isLogin && !username)) {
      setError('Please fill in all fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    try {
      // Pass the credentials to parent component
      const credentials = isLogin 
        ? { email, password } 
        : { username, email, password };
      
      await onLogin(credentials, isLogin);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-red-400">
          {/* Logo/Header */}
          <div className="text-center mb-8">
            <h1 className="text-6xl mb-4 text-red-500" style={{ 
              fontFamily: "'Rubik Bubbles', cursive",
              textShadow: '3px 3px 0px #DC2626, 5px 5px 0px #991B1B',
              letterSpacing: '3px',
              marginLeft: '-20px'
            }}>
              CHALLENGE ME
            </h1>
            <p className="text-gray-700 font-bold text-lg">
              🎮 Compete • Wager • Dominate 🏆
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex mb-6 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 rounded-full font-bold transition ${
                isLogin
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 rounded-full font-bold transition ${
                !isLogin
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <div className="space-y-4">
            {!isLogin && (
              <div>
                <label htmlFor="username" className="block text-sm font-bold text-gray-700 mb-2">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-4 py-3 border-2 border-yellow-300 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none transition"
                  placeholder="Choose a cool username"
                  disabled={isLoading}
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-3 border-2 border-yellow-300 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none transition"
                placeholder="you@example.com"
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-3 border-2 border-yellow-300 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none transition"
                placeholder="••••••••"
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded-xl text-sm font-semibold">
                ⚠️ {error}
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-black text-lg py-4 rounded-xl hover:from-red-600 hover:to-pink-600 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transform hover:scale-105"
            >
              {isLoading ? '⏳ Loading...' : isLogin ? '🚀 Let\'s Go!' : '🎉 Join Now!'}
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-white font-bold text-sm mt-6 drop-shadow-lg">
          ⚡ Demo Day 2025 • OASIS @ Northeastern ⚡
        </p>
      </div>
    </div>
  );
}