import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCdUhAJ5lKojZ8dZjgyITu9Bgu0LzWI4jY",
  authDomain: "lorawan-cce0a.firebaseapp.com",
  projectId: "lorawan-cce0a",
  storageBucket: "lorawan-cce0a.appspot.com",
  messagingSenderId: "357348770098",
  appId: "1:357348770098:web:64190984599769aed7972b",
  measurementId: "G-GMDSTXJSG7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
