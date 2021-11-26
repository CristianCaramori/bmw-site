import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDjOVhuznXQKebXUOTTG47lOW_N40ZAzio",
    authDomain: "bmw-site-c717f.firebaseapp.com",
    projectId: "bmw-site-c717f",
    storageBucket: "bmw-site-c717f.appspot.com",
    messagingSenderId: "870719035228",
    appId: "1:870719035228:web:0dc4a0566d3091b4b4d399"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app