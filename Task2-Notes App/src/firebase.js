import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvA4UCts5hutLcdw4h5PgtoVHUCr4ZHq8",
  authDomain: "todo-app-d41d2.firebaseapp.com",
  projectId: "todo-app-d41d2",
  storageBucket: "todo-app-d41d2.appspot.com",
  messagingSenderId: "995910260619",
  appId: "1:995910260619:web:d6e4cbacd6ddc8eda3018e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
