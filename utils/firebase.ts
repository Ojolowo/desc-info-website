import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyDn25Kgog9rNZM37LpnjF8GyrELJM5WykQ",
   authDomain: "desc-revamped.firebaseapp.com",
   projectId: "desc-revamped",
   storageBucket: "desc-revamped.appspot.com",
   messagingSenderId: "658993704428",
   appId: "1:658993704428:web:e69e18271c2beb25f864c9",
   measurementId: "G-JRXRT17C74",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
