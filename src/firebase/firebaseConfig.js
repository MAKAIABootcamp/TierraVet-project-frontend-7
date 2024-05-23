import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración de tu aplicación Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDNn2tGgucaA-Tg_y8_hPZVWa4TSOOnhy4",
  authDomain: "tierravet-3bff5.firebaseapp.com",
  projectId: "tierravet-3bff5",
  storageBucket: "tierravet-3bff5.appspot.com",
  messagingSenderId: "141763438950",
  appId: "1:141763438950:web:46cb391212a21cb00e00a7",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dataBase = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

