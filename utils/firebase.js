// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "sparticle-f3619.firebaseapp.com",
  projectId: "sparticle-f3619",
  storageBucket: "sparticle-f3619.appspot.com",
  messagingSenderId: "183297049049",
  appId: "1:183297049049:web:86531d2adad6f07b6d19c8",
  measurementId: "G-33PZCBYH3X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);