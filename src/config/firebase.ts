import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDntms7NYF7Z68DDrTZGco8obhlR-o2MJM",
  authDomain: "natgeo-d572e.firebaseapp.com",
  projectId: "natgeo-d572e",
  storageBucket: "natgeo-d572e.appspot.com",
  messagingSenderId: "819206849538",
  appId: "1:819206849538:web:96251a578c82474d5e931b"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)