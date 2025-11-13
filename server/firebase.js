import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCVWhUtFFRO9CJ_gI9jtwDKa4ADuMKfiJE",
  authDomain: "oasis-project-8644d.firebaseapp.com",
  projectId: "oasis-project-8644d",
  storageBucket: "oasis-project-8644d.firebasestorage.app",
  messagingSenderId: "194929183827",
  appId: "1:194929183827:web:50f2fdf262f5de933e8aa6",
  measurementId: "G-R0PNBGWF1W"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app)