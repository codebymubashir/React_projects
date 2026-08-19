// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZGYazj2iwIJ6ibT_IpGwyvEuIG8ybMPQ",
  authDomain: "vintage-estate.firebaseapp.com",
  projectId: "vintage-estate",
  storageBucket: "vintage-estate.firebasestorage.app",
  messagingSenderId: "703418490077",
  appId: "1:703418490077:web:7aaf12f5974762a9e34f34",
  measurementId: "G-G7BV9FJBCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)