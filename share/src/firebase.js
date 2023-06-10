// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
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
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export {auth,provider,storage};
export default db;

