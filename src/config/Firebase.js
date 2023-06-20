
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'


const firebaseConfig = {
  apiKey: "AIzaSyBVS7YoC4sMC9e6smdu7YWE9ZNV4ijpQx4",
  authDomain: "clone-tiktok---jornadadev.firebaseapp.com",
  projectId: "clone-tiktok---jornadadev",
  storageBucket: "clone-tiktok---jornadadev.appspot.com",
  messagingSenderId: "309036341847",
  appId: "1:309036341847:web:51d0650e925a6c56dfa112"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;