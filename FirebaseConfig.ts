import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCstoJQwCsxf-kwkEMV01OVtQzZjv0Z1oo",
  authDomain: "reactnative-34ecd.firebaseapp.com",
  projectId: "reactnative-34ecd",
  storageBucket: "reactnative-34ecd.appspot.com",
  messagingSenderId: "217619625420",
  appId: "1:217619625420:web:6cea3a530454d302165969",
  measurementId: "G-RCDB75NKN3"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_ANALITYCS = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);