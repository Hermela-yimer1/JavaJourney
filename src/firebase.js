import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8N7q7XEWnyuIhsheYWDurAIZJ8epFPU0",
  authDomain: "javajourneys-63e9f.firebaseapp.com",
  projectId: "javajourneys-63e9f",
  storageBucket: "javajourneys-63e9f.appspot.com",
  messagingSenderId: "1043582072736",
  appId: "1:1043582072736:web:12e484f597404f721216c5",
  measurementId: "G-L24PGVELPQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
