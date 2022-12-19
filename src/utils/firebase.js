// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";
import { getPerformance } from "firebase/performance";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "surtaal-website.firebaseapp.com",
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: "surtaal-website",
  storageBucket: "surtaal-website.appspot.com",
  messagingSenderId: "273515420192",
  appId: "1:273515420192:web:c5e0384806a87682fefa45",
  measurementId: "G-3V9TZXWCQK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const perf = getPerformance(app);
