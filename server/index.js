import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// TODO: Import Firebase database functions when implementing Firebase
// import { database } from './firebase.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// GET /api/challenges/daily - Get daily challenges
app.get('/api/challenges/daily', (req, res) => {
  // TODO: Replace with Firebase query when implementing Firebase
  // For now, return hardcoded challenges
  const dailyChallenges = [
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
  
  res.json(dailyChallenges);
});

// GET /api/challenges/weekly - Get weekly challenges
app.get('/api/challenges/weekly', (req, res) => {
  // TODO: Replace with Firebase query when implementing Firebase
  // For now, return hardcoded weekly challenge
  const weeklyChallenge = {
    id: 4,
    title: "10,000 Steps Daily",
    description: "Walk 10,000 steps every day this week. Track your progress and stay active!",
    points: 200,
    category: "Fitness"
  };
  
  res.json(weeklyChallenge);
});

// GET /api/leaderboard - Get leaderboard
app.get('/api/leaderboard', (req, res) => {
  // TODO: Replace with Firebase query when implementing Firebase
  // For now, return hardcoded leaderboard
  const leaderboard = [
    { rank: 1, name: "Alex Johnson", points: 2845 },
    { rank: 2, name: "Sarah Chen", points: 2650 },
    { rank: 3, name: "Mike Davis", points: 2490 },
    { rank: 4, name: "Emma Wilson", points: 2320 },
    { rank: 5, name: "David Lee", points: 2180 },
    { rank: 6, name: "Lisa Anderson", points: 2050 },
    { rank: 7, name: "Tom Brown", points: 1920 },
    { rank: 8, name: "Maria Garcia", points: 1810 },
  ];
  
  res.json(leaderboard);
});

// POST /api/challenges/complete - Mark a challenge as complete
app.post('/api/challenges/complete', (req, res) => {
  // TODO: Implement Firebase update when implementing Firebase
  // This endpoint will update user progress and points in Firebase
  const { challengeId, userId } = req.body;
  
  // Placeholder response
  res.json({ 
    success: true, 
    message: 'Challenge completed successfully',
    // TODO: Return updated points and leaderboard position from Firebase
  });
});

// POST /api/users/register - Register a new user
app.post('/api/users/register', (req, res) => {
  // TODO: Implement Firebase user creation when implementing Firebase
  const { name, email, password } = req.body;
  
  // Placeholder response
  res.json({ 
    success: true, 
    message: 'User registered successfully',
    // TODO: Return user data from Firebase
  });
});

// POST /api/users/login - User login
app.post('/api/users/login', (req, res) => {
  // TODO: Implement Firebase authentication when implementing Firebase
  const { email, password } = req.body;
  
  // Placeholder response
  res.json({ 
    success: true, 
    message: 'Login successful',
    // TODO: Return auth token and user data from Firebase
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Challenge Me API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

