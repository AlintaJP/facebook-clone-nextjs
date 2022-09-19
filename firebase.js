import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDedl7XgXc0_hnMHJlp4IwYIQtxyiPTo-Y",
  authDomain: "facebook-clone-362918.firebaseapp.com",
  projectId: "facebook-clone-362918",
  storageBucket: "facebook-clone-362918.appspot.com",
  messagingSenderId: "353028796789",
  appId: "1:353028796789:web:523db08776feeefe69233c",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
