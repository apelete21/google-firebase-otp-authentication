import firebase from "firebase/compat";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAFVk7J-vn2ZiimWhCtTAaVi5C-mQt2hPg",
  authDomain: "test-2defc.firebaseapp.com",
  databaseURL: "https://test-2defc-default-rtdb.firebaseio.com",
  projectId: "test-2defc",
  storageBucket: "test-2defc.appspot.com",
  messagingSenderId: "35883133689",
  appId: "1:35883133689:web:b775e39eaa88048e4b5028",
  measurementId: "G-H0MYP8EXLK",
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
// const analytics = getAnalytics(app);
