// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaBbg1OXmdpVq3hx8gOufV052Yvj2xQ4s",
  authDomain: "react-course-project-26de8.firebaseapp.com",
  projectId: "react-course-project-26de8",
  storageBucket: "react-course-project-26de8.appspot.com",
  messagingSenderId: "673126238225",
  appId: "1:673126238225:web:f7e62e7f264c7784eb09b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
