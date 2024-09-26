// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGVRv587HR9ynxJn0CFMC2HAYlJd5RM1U",
  authDomain: "fmds-aula08.firebaseapp.com",
  projectId: "fmds-aula08",
  storageBucket: "fmds-aula08.appspot.com",
  messagingSenderId: "827268851581",
  appId: "1:827268851581:web:284383218cc63bb25a4e14",
};

// Initialize Firebase
const firebaseApplication = initializeApp(firebaseConfig);
export default firebaseApplication;
