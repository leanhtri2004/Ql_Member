import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, getDocs, deleteDoc, collection, doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBJUhsUompQYwFbBggRZfC8edjUbAwncM",
  authDomain: "qlmuaban.firebaseapp.com",
  projectId: "qlmuaban",
  storageBucket: "qlmuaban.firebasestorage.app",
  messagingSenderId: "887049953971",
  appId: "1:887049953971:web:dd467525a4f84e4ca1c6c6",
  measurementId: "G-MZGQ2DYED4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

// Export để dùng ở file khác
export { app, db, auth, addDoc, getDocs, deleteDoc, doc, collection };