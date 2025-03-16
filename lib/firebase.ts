// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4BEo8z0FgVBoMVDUauyJ1hrsmvxVxozg",
  authDomain: "lifequest-f3c82.firebaseapp.com",
  databaseURL: "https://lifequest-f3c82-default-rtdb.firebaseio.com",
  projectId: "lifequest-f3c82",
  storageBucket: "lifequest-f3c82.firebasestorage.app",
  messagingSenderId: "907752044873",
  appId: "1:907752044873:web:7c7ee622a41da6fdec4298",
  measurementId: "G-E510RJ2KSY"
};

// Initialize Firebase
const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(firebaseApp);

// Initialize analytics only on client side
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(firebaseApp);
}

export { firebaseApp, db, analytics };