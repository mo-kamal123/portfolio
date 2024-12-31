import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2-168Nl3oHcbqLXiWxDHZg1dyvgOWqyo",
  authDomain: "portfolio-cd9f7.firebaseapp.com",
  projectId: "portfolio-cd9f7",
  storageBucket: "portfolio-cd9f7.appspot.com",
  messagingSenderId: "88471545016",
  appId: "1:88471545016:web:986c12c620c37a37b8c04d",
  measurementId: "G-NVBQNBJS6Y"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };