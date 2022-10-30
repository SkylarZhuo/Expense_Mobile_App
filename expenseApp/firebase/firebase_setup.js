// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// import {REACT_APP_api_key,AUTHDOMAIN,PROJECTID,STORAGEBUCKET,MESSAGINGSENDERID,APPID} from 'react-native-dotenv'
// import {APIKEY,AUTHDOMAIN,PROJECTID,STORAGEBUCKET,MESSAGINGSENDERID,APPID} from '@env'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsLXdVsRMAOVENcmH4lCAv1ZCo4Js4fIk",
  authDomain: "expensetracker-ef2f4.firebaseapp.com",
  projectId: "expensetracker-ef2f4",
  storageBucket: "expensetracker-ef2f4.appspot.com",
  messagingSenderId: "616973591256",
  appId: "1:616973591256:web:57842cbfd9adecdb852dad"
};

// const firebaseConfig = {
//     apiKey: REACT_APP_api_key,
//     authDomain: AUTHDOMAIN,
//     projectId: PROJECTID,
//     storageBucket: STORAGEBUCKET,
//     messagingSenderId: MESSAGINGSENDERID,
//     appId: APPID
//   };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//This variable gives us access to	Cloud Firestore service
const firestore = getFirestore(app);

export{firestore}