// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKecA8TUjp6AsKGWoY0eFXa5j2AmKd6nA",
  authDomain: "netflix-gpt-b797b.firebaseapp.com",
  projectId: "netflix-gpt-b797b",
  storageBucket: "netflix-gpt-b797b.firebasestorage.app",
  messagingSenderId: "628613102463",
  appId: "1:628613102463:web:c3245566a2e2e70da0f84a",
  measurementId: "G-SK26KXJHR5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
