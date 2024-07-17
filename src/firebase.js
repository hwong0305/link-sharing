// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCd5YbaSvfwv5PYT8jBmUbUor2_0L0t9xE',
  authDomain: 'dev-535bf.firebaseapp.com',
  projectId: 'dev-535bf',
  storageBucket: 'dev-535bf.appspot.com',
  messagingSenderId: '799194373440',
  appId: '1:799194373440:web:c1a8a5f42e8022cbc7eea5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
