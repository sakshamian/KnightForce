// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC-bhGY7d93c9AkPxKQY7h7lJTws7g487o",
  authDomain: "knightforce-798a6.firebaseapp.com",
  projectId: "knightforce-798a6",
  storageBucket: "knightforce-798a6.appspot.com",
  messagingSenderId: "15078694171",
  appId: "1:15078694171:web:4c7c48b5f27e8acada87be",
  measurementId: "G-VZ76T1FBK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;