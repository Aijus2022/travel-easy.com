// firebase.jsx
// src/firebase.jsx
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwITpGd6r2y7mkZGAUq3XT6cRRCFQzFrg",
  authDomain: "travel-easy-3fe53.firebaseapp.com",
  projectId: "travel-easy-3fe53",
  storageBucket: "travel-easy-3fe53.appspot.com",
  messagingSenderId: "49424510989",
  appId: "1:49424510989:web:abeb1911a81efcd446e544",
  measurementId: "G-THBCRFBQ84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics
const analytics = getAnalytics(app);

// Export what you need
export { app, db, analytics };


