import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAoYVWtp1kHvf0slHyv4-Df7VQRg-PtUp4",
  authDomain: "notifyme-7e2ea.firebaseapp.com",
  databaseURL: "https://notifyme-7e2ea-default-rtdb.firebaseio.com",
  projectId: "notifyme-7e2ea",
  storageBucket: "notifyme-7e2ea.firebasestorage.app",
  messagingSenderId: "25316775865",
  appId: "1:25316775865:web:2826d2507ed122a8c74868",
  measurementId: "G-Q75J1F4Z9D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);