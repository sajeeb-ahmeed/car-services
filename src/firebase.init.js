// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvm4ewRuU58adyfD8kM-6L7oJ63291ScM",
  authDomain: "car-doctor-8f473.firebaseapp.com",
  projectId: "car-doctor-8f473",
  storageBucket: "car-doctor-8f473.appspot.com",
  messagingSenderId: "257868997404",
  appId: "1:257868997404:web:b2dfd4dad4cb3a833bd0d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;