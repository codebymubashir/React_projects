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
  apiKey: "AIzaSyA_LsZ6qKgbKekoXkLDITO-8IMPc8KyBL4",
  authDomain: "expensify-14286.firebaseapp.com",
  projectId: "expensify-14286",
  storageBucket: "expensify-14286.firebasestorage.app",
  messagingSenderId: "479066971584",
  appId: "1:479066971584:web:44982bf7af8928ca71fc25",
  measurementId: "G-H83ER45GT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)