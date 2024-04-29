// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfbzlfHueIANRC7x5Mwjj9AM43QFjzXkE",
  authDomain: "quiz-02-b8772.firebaseapp.com",
  projectId: "quiz-02-b8772",
  storageBucket: "quiz-02-b8772.appspot.com",
  messagingSenderId: "319915553011",
  appId: "1:319915553011:web:1d0ea6ded46ab93c604786",
  measurementId: "G-871G52791H"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// export const auth = getAuth(firebaseApp);
export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// change the rules of Storage as follows:

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if true;
//     }
//   }
// }
