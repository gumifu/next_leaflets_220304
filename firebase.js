// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp ,getApps,getApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADbrgp004TofNKmwGFiRrOZKYH5GRmIHg",
  authDomain: "next-leaflets-220304.firebaseapp.com",
  projectId: "next-leaflets-220304",
  storageBucket: "next-leaflets-220304.appspot.com",
  messagingSenderId: "425840462204",
  appId: "1:425840462204:web:32fcc921bc8beb04837cf9",
  measurementId: "G-PBE9DJ071M"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
