// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaQ7ZJ4zDRASTd8T2CbGNazdXbd-szBvA",
  authDomain: "my-ecommerce-3cd35.firebaseapp.com",
  projectId: "my-ecommerce-3cd35",
  storageBucket: "my-ecommerce-3cd35.appspot.com",
  messagingSenderId: "955293708579",
  appId: "1:955293708579:web:2f991a78b7a19669355c96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db