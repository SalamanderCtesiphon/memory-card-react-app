// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSlaaH_1W_jf0yiiQ5fMjNShuwrylN7rg",
  authDomain: "memory-game-1f43b.firebaseapp.com",
  projectId: "memory-game-1f43b",
  storageBucket: "memory-game-1f43b.appspot.com",
  messagingSenderId: "387844699737",
  appId: "1:387844699737:web:a0b92367da9aa2c927e348"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app