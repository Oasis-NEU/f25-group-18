import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import HomeView from "./components/HomeView";
import FeedView from "./components/FeedView";
import LeaderboardView from "./components/LeaderboardView";
import ProfileView from "./components/ProfileView";

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
