// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4BEo8z0FgVBoMVDUauyJ1hrsmvxVxozg",
  authDomain: "lifequest-f3c82.firebaseapp.com", //Your Auth Domain
  projectId: "lifequest-f3c82", // Your Project ID
  storageBucket: "lifequest-f3c82.appspot.com", // Your Storage Bucket
  messagingSenderId: "907752044873", // Your Messaging Sender ID
 
};

// Initialize Firebase
const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(firebaseApp);

export { firebaseApp, db };