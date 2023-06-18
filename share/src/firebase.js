// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
import { getStorage,ref } from "firebase/storage";
import { getDatabase } from "firebase/database";
// import firebase from 'firebase/app';
// import 'firebase/database';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNRMsFAv7_OaCrcVFQOEBROSRCzFiiWq4",
    authDomain: "capture-share-847fd.firebaseapp.com",
    projectId: "capture-share-847fd",
    storageBucket: "capture-share-847fd.appspot.com",
    messagingSenderId: "1075701571534",
    appId: "1:1075701571534:web:f60d96d08b17403a89d59f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const storageRef = ref(storage);
// const database = firebase.database();

export {auth,provider,storage,database,storageRef};


