import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Dejar en el archivo las credenciales del proyecto
const firebaseConfig = {
    apiKey: "AIzaSyAoNve5wa86W4TFDdaEV6UQWWf1wipMIvs",
    authDomain: "peruweave.firebaseapp.com",
    projectId: "peruweave",
    storageBucket: "peruweave.appspot.com",
    messagingSenderId: "721450682743",
    appId: "1:721450682743:web:211caaf1b8f7e7123e3972"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);
