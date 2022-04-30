// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7ZUwfa0oBritxBIyfTNkxk0gn4o4VbLw",
    authDomain: "the-virtual-warehouse.firebaseapp.com",
    projectId: "the-virtual-warehouse",
    storageBucket: "the-virtual-warehouse.appspot.com",
    messagingSenderId: "143782312163",
    appId: "1:143782312163:web:bd0e45219fbd5cf31aadd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;