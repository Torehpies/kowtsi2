// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAY38nE3uopM_-53JrA93kxSRGKfScKNak",
  authDomain: "auth-187db.firebaseapp.com",
  projectId: "auth-187db",
  storageBucket: "auth-187db.appspot.com",
  messagingSenderId: "904569823189",
  appId: "1:904569823189:web:b94c0b66c8064d72a6a75c",
  measurementId: "G-9HLFPL29WE",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };
