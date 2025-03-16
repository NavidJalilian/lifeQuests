// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsKaKX_A1OMm4P1JOn_YYCVwHcLkKwadI",
  authDomain: "playlifequest.firebaseapp.com",
  projectId: "playlifequest",
  storageBucket: "playlifequest.firebasestorage.app",
  messagingSenderId: "360953820262",
  appId: "1:360953820262:web:68db26de44edda1c2169a7",
  measurementId: "G-60FVHRLCBY",
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