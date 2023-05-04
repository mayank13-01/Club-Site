import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCwcX_cGiPwnQEtAI8zJjLILCbGkXjL8o4",
  authDomain: "majorproject-2f5f2.firebaseapp.com",
  databaseURL: "https://majorproject-2f5f2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "majorproject-2f5f2",
  storageBucket: "majorproject-2f5f2.appspot.com",
  messagingSenderId: "756841882675",
  appId: "1:756841882675:web:248376d8ec3dbc0ff3ef46",
  measurementId: "G-JLR5NX2QXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage();

export const provider = new GoogleAuthProvider();
export default app;
