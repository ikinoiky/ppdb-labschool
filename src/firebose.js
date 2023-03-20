// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgOtn5vRzw239X4uQpzaXz2E_0zxPSjEc",
  authDomain: "ppdb-labschool.firebaseapp.com",
  databaseURL: "https://ppdb-labschool-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ppdb-labschool",
  storageBucket: "ppdb-labschool.appspot.com",
  messagingSenderId: "320297311234",
  appId: "1:320297311234:web:2f9b57b4585f42c93a9b1b",
  measurementId: "G-W9JZFYPTT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);