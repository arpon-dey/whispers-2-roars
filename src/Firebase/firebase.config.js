// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOvQdqdbLwf4qXnFCwHhWJjGRjh38PZI8",
  authDomain: "whisper-to-roar.firebaseapp.com",
  projectId: "whisper-to-roar",
  storageBucket: "whisper-to-roar.appspot.com",
  messagingSenderId: "239019296834",
  appId: "1:239019296834:web:dc9f7c5d2a3405ce1245db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;