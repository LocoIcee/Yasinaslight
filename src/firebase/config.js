// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAywBahR15VJG6Dn0EX_jm0GZUDvWiaakw",
  authDomain: "yasinaslight.firebaseapp.com",
  projectId: "yasinaslight",
  storageBucket: "yasinaslight.firebasestorage.app",
  messagingSenderId: "382652742757",
  appId: "1:382652742757:web:f1bde620b0318be85d5a8c",
  measurementId: "G-0N5MFPM33T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
export default app;