// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbz9RtBT0OOg8kudr7LIzEOnDq8l2ewks",
    authDomain: "genius-car-services-97741.firebaseapp.com",
    projectId: "genius-car-services-97741",
    storageBucket: "genius-car-services-97741.appspot.com",
    messagingSenderId: "772177149076",
    appId: "772177149076:web:8529cc88883fee28a64881",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;